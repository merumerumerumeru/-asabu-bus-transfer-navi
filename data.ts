export type DayType = 'weekday' | 'saturday' | 'sundayHoliday'
export type BusDeparture = { time:string; route:'麻15'|'麻16'|'麻17'; destination:string; via:string; stopsAtTarget:boolean }
export type Timetable = Record<DayType, BusDeparture[]>

export const BUS_REVISION = '2026-04-01（入力確認前のデモデータ）'
export const SUBWAY_REVISION = '2026-08-01（入力確認前のデモデータ）'

/* 注意: 以下は画面・計算確認用の仮データです。実運用前に公式時刻表で照合してください。 */
export const busTimetable: Timetable = {
  weekday: [
    {time:'17:10',route:'麻15',destination:'花畔',via:'花川3丁目経由',stopsAtTarget:true},
    {time:'17:22',route:'麻16',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'17:35',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'17:50',route:'麻15',destination:'花畔',via:'花川3丁目経由',stopsAtTarget:true},
    {time:'18:05',route:'麻16',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true},
    {time:'18:20',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true}
  ],
  saturday: [
    {time:'17:15',route:'麻15',destination:'花畔',via:'花川3丁目経由',stopsAtTarget:true},
    {time:'17:35',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'17:55',route:'麻16',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true}
  ],
  sundayHoliday: [
    {time:'17:20',route:'麻15',destination:'花畔',via:'花川3丁目経由',stopsAtTarget:true},
    {time:'17:45',route:'麻17',destination:'石狩庁舎前',via:'花川南1条6丁目経由',stopsAtTarget:true},
    {time:'18:10',route:'麻16',destination:'花畔',via:'花川5丁目経由',stopsAtTarget:true}
  ]
}

export const subwayDepartures: Record<DayType,string[]> = {
  weekday:['16:45','16:50','16:55','17:00','17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55','18:00','18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55'],
  saturday:['16:45','16:52','16:59','17:06','17:13','17:20','17:27','17:34','17:41','17:48','17:55','18:02','18:09','18:16','18:23','18:30','18:37','18:44'],
  sundayHoliday:['16:45','16:52','16:59','17:06','17:13','17:20','17:27','17:34','17:41','17:48','17:55','18:02','18:09','18:16','18:23','18:30','18:37','18:44']
}

export const holidays = ['2026-08-11','2026-09-21','2026-09-22','2026-09-23','2026-10-12','2026-11-03','2026-11-23']
