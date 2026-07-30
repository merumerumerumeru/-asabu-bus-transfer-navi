import React,{useEffect,useMemo,useState} from 'react'
import {createRoot} from 'react-dom/client'
import {BUS_REVISION,SUBWAY_REVISION,busTimetable,holidays,subwayDepartures,type DayType} from './data'
import './styles.css'

type LocationType='work'|'sapporo'|'other'
type Settings={location:LocationType;workAccessMinutes:number;otherAccessMinutes:number;rideMinutes:number;delayMinutes:number;dayOverride:'auto'|DayType}
const DEFAULT_SETTINGS:Settings={location:'work',workAccessMinutes:12,otherAccessMinutes:10,rideMinutes:18,delayMinutes:0,dayOverride:'auto'}
const STORAGE_KEY='asabu-bus-settings-v1'

const toMinutes=(time:string)=>{const [h,m]=time.split(':').map(Number);return h*60+m}
const dateKey=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
const detectDayType=(d:Date):DayType=>holidays.includes(dateKey(d))||d.getDay()===0?'sundayHoliday':d.getDay()===6?'saturday':'weekday'
const marginLabel=(m:number)=>m>=5?{text:'余裕あり',level:'safe'}:m>=3?{text:'急げば間に合う',level:'rush'}:{text:'間に合わない',level:'miss'}

function App(){
  const [now,setNow]=useState(new Date())
  const [settings,setSettings]=useState<Settings>(()=>{
    try{const v=localStorage.getItem(STORAGE_KEY);return v?{...DEFAULT_SETTINGS,...JSON.parse(v)}:DEFAULT_SETTINGS}catch{return DEFAULT_SETTINGS}
  })
  useEffect(()=>{const id=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(id)},[])
  useEffect(()=>localStorage.setItem(STORAGE_KEY,JSON.stringify(settings)),[settings])

  const dayType=settings.dayOverride==='auto'?detectDayType(now):settings.dayOverride
  const access=settings.location==='work'?settings.workAccessMinutes:settings.location==='sapporo'?0:settings.otherAccessMinutes
  const result=useMemo(()=>{
    const current=now.getHours()*60+now.getMinutes()
    const subway=subwayDepartures[dayType].map(time=>({time,minutes:toMinutes(time)})).find(x=>x.minutes>=current+access)
    if(!subway)return{subway:null,arrival:null,buses:[]}
    const arrival=subway.minutes+settings.rideMinutes+settings.delayMinutes
    const buses=busTimetable[dayType].filter(b=>b.stopsAtTarget).map(b=>{const margin=toMinutes(b.time)-arrival;return{...b,margin,status:marginLabel(margin)}}).filter(b=>b.margin>=-2).slice(0,3)
    return{subway,arrival,buses}
  },[now,settings,dayType,access])

  const setNum=(key:keyof Settings,value:string)=>setSettings(s=>({...s,[key]:Number(value)}))
  return <main>
    <header><p className="eyebrow">地下鉄さっぽろ駅 → 麻生駅 → 花川北2条5丁目</p><h1>麻生バス乗継ナビ</h1><div className="clock">{now.toLocaleTimeString('ja-JP')}</div><p>{now.toLocaleDateString('ja-JP',{dateStyle:'full'})}</p></header>
    <section className="card"><h2>現在地・条件</h2>
      <label>現在地<select value={settings.location} onChange={e=>setSettings(s=>({...s,location:e.target.value as LocationType}))}><option value="work">職場</option><option value="sapporo">地下鉄さっぽろ駅</option><option value="other">その他</option></select></label>
      {settings.location==='work'&&<label>職場からホームまで<span><input type="number" value={settings.workAccessMinutes} onChange={e=>setNum('workAccessMinutes',e.target.value)}/> 分</span></label>}
      {settings.location==='other'&&<label>ホームまで<span><input type="number" value={settings.otherAccessMinutes} onChange={e=>setNum('otherAccessMinutes',e.target.value)}/> 分</span></label>}
      <label>曜日区分<select value={settings.dayOverride} onChange={e=>setSettings(s=>({...s,dayOverride:e.target.value as Settings['dayOverride']}))}><option value="auto">自動判定</option><option value="weekday">平日</option><option value="saturday">土曜</option><option value="sundayHoliday">日祝</option></select></label>
      <label>地下鉄遅延<select value={settings.delayMinutes} onChange={e=>setNum('delayMinutes',e.target.value)}><option value="0">0分</option><option value="1">+1分</option><option value="3">+3分</option><option value="5">+5分</option></select></label>
    </section>
    <section className="card journey"><h2>乗る地下鉄</h2>{result.subway&&result.arrival!==null?<><div className="primary-time">{result.subway.time} 発</div><p>南北線・麻生方面</p><p>麻生駅到着見込み：<strong>{String(Math.floor(result.arrival/60)).padStart(2,'0')}:{String(result.arrival%60).padStart(2,'0')}</strong></p></>:<p>該当する地下鉄がありません。</p>}</section>
    <section className="card"><h2>次に乗れるバス</h2><div className="bus-list">{result.buses.length?result.buses.map(b=><article className={`bus ${b.status.level}`} key={`${b.route}-${b.time}`}><div><span className="route">{b.route}</span><strong className="bus-time">{b.time}</strong></div><div className="bus-detail"><strong>{b.destination} 行き</strong><span>{b.via}</span><span>乗換 {b.margin}分</span></div><span className="status">{b.status.text}</span></article>):<p>条件に合うバスがありません。</p>}</div></section>
    <details className="card"><summary>詳細設定</summary><label>地下鉄乗車時間<span><input type="number" value={settings.rideMinutes} onChange={e=>setNum('rideMinutes',e.target.value)}/> 分</span></label><button onClick={()=>setSettings(DEFAULT_SETTINGS)}>初期設定に戻す</button></details>
    <footer>
  <p>バス改正：{BUS_REVISION}</p>
  <p>地下鉄改正：{SUBWAY_REVISION}</p>
  <p>対象路線：麻15・麻16・麻17</p>
  <p>対象停留所：花川北2条5丁目</p>



  <hr />

  <p>Version 1.0.0</p>
</footer>
  </main>
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
