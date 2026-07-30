"""CSVから時刻表データを確認用JSONへ変換する補助ツール。PDF自動抽出は未実装です。"""
from __future__ import annotations
import csv, json, sys
from pathlib import Path

def main() -> int:
    if len(sys.argv) != 2:
        print("使い方: python update_timetable.py timetable.csv")
        return 2
    path = Path(sys.argv[1])
    if not path.exists():
        print(f"ファイルがありません: {path}")
        return 1
    with path.open(encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    print(json.dumps(rows, ensure_ascii=False, indent=2))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
