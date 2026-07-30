export type DayType = 'weekday' | 'saturday' | 'sundayHoliday'
export type BusDeparture = {
  time: string
  route: '麻15' | '麻16' | '麻17'
  destination: string
  via: string
  stopsAtTarget: boolean
}
export type Timetable = Record<DayType, BusDeparture[]>

export const BUS_REVISION = '2026-04-01（中央バス公式PDF・画像確認済）'
export const SUBWAY_REVISION = '2026-08-01（入力確認前のデモデータ）'

export const busTimetable: Timetable = {
  weekday: [
    {time:'07:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'07:50',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'07:59',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'08:06',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'08:07',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'08:40',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'08:43',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'09:05',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'09:21',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'09:25',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'09:55',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'10:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'10:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'10:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'11:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'11:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'11:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'12:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'12:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'12:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'13:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'13:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'13:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'14:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'14:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'14:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'15:17',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'15:23',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'15:53',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'16:07',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'16:10',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'16:30',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'16:50',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'17:05',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'17:07',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'17:25',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:37',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'17:50',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'18:05',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'18:07',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'18:20',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'18:35',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'18:37',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'18:55',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'19:07',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'19:15',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'19:35',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'19:37',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'19:55',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'20:04',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'20:15',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'20:45',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'21:15',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'21:49',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'22:25',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true}
  ],
  saturday: [
    {time:'07:15',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'07:50',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'07:58',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'08:24',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'08:30',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'09:14',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'09:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'09:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'10:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'10:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'11:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'11:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'11:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'12:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'12:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'13:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'13:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'13:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'14:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'14:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'15:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'15:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'15:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'16:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'16:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'17:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'18:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'18:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'19:00',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'19:30',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'19:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'20:00',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'20:30',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'21:10',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'21:44',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'21:45',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'22:20',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true}
  ],
  sundayHoliday: [
    {time:'07:10',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'07:50',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'08:24',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'08:30',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'09:04',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'09:18',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'10:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'10:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'11:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'11:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'11:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'12:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'12:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'13:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'13:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'13:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'14:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'14:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'15:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'15:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'15:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'16:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'16:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'17:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:55',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'18:17',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'18:44',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'19:09',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'19:20',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'19:50',route:'麻15',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'20:25',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'21:00',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true},
    {time:'21:34',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'22:00',route:'麻16',destination:'石狩庁舎前',via:'花川方面',stopsAtTarget:true}
  ]
}

/*
 * 地下鉄は現在デモデータのままです。
 * 実運用前に、さっぽろ駅発・麻生方面の公式時刻表へ置き換えてください。
 */
export const subwayDepartures: Record<DayType, string[]> = {
  weekday: ['16:45','16:50','16:55','17:00','17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55','18:00','18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55'],
  saturday: ['16:45','16:52','16:59','17:06','17:13','17:20','17:27','17:34','17:41','17:48','17:55','18:02','18:09','18:16','18:23','18:30','18:37','18:44'],
  sundayHoliday: ['16:45','16:52','16:59','17:06','17:13','17:20','17:27','17:34','17:41','17:48','17:55','18:02','18:09','18:16','18:23','18:30','18:37','18:44']
}

export const holidays = [
  '2026-08-11',
  '2026-09-21',
  '2026-09-22',
  '2026-09-23',
  '2026-10-12',
  '2026-11-03',
  '2026-11-23'
]
