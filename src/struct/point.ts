interface PointStruct {
  code: string
  name: string
  address: string
  interval: number
  dataType: string
  dataGoal: string
  process: string
}
interface MetricStruct {
  name: string
  code: string
  address: string
  points: PointStruct[]
}

interface filterStruct {
  metric: string
}

interface MetricListStruct {
  code: string
  name: string
}
