<script setup lang="ts">
import { MetricStruct, filterStruct, MetricListStruct } from '@/struct/point'
import { PageStruct } from '@/struct/common'
import { ref, reactive } from 'vue'

const filterForm: filterStruct = ref({})
const metricList: MetricListStruct[] = reactive([
  {
    name: '设备A',
    code: 'SBBM-A'
  },
  {
    name: '设备B',
    code: 'SBBM-B'
  },
  {
    name: '设备C',
    code: 'SBBM-C'
  }
])
const tableData: MetricStruct[] = reactive([
  {
    name: 'metric',
    code: 'metric',
    address: '400123',
    points: [
      {
        code: 'WD',
        name: '温度',
        address: '40002',
        interval: 60,
        dataType: 'FLoat',
        dataGoal: 'FLoat',
        process: 'none'
      },
      {
        code: 'YL',
        name: '压力',
        address: '40002',
        interval: 60,
        dataType: 'FLoat',
        dataGoal: 'FLoat',
        process: 'none'
      }
    ]
  },
  {
    name: 'metric',
    code: 'metric',
    address: '400123',
    points: [
      {
        code: 'WD',
        name: '温度',
        address: '40002',
        interval: 60,
        dataType: 'FLoat',
        dataGoal: 'FLoat',
        process: 'none'
      },
      {
        code: 'YL',
        name: '压力',
        address: '40002',
        interval: 60,
        dataType: 'FLoat',
        dataGoal: 'FLoat',
        process: 'none'
      }
    ]
  }
])
const handleEdit = (index: number, row: MetricStruct) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: MetricStruct) => {
  console.log(index, row)
}

const pageObj: PageStruct = reactive({
  page: 1,
  size: 20,
  total: 100
})

const handleCurrentChange = (val: number) => {
  pageObj.page = val
}

// 查询数据
const QueryData = () => {
  console.log('发送请求')
}
</script>

<template>
  <div>
    <!-- 筛选框 -->
    <el-form :inline="true" :model="filterForm" class="demo-form-inline">
      <el-form-item label="设备编码">
        <el-select v-model="filterForm.metric" placeholder="请选择设备编码">
          <el-option
            v-for="item in metricList"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="QueryData">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格内容 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="设备名称" width="180" />
      <el-table-column prop="code" label="设备编码" width="180" />
      <el-table-column prop="address" label="通讯地址" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-pagination
    class="flex-right"
    background
    :current-page="pageObj.page"
    layout="prev, pager, next"
    :total="pageObj.total"
    @size-change="pageObj.size"
    @current-change="handleCurrentChange"
    :page-size="pageObj.size"
  />
</template>

<style lang="less" scoped>
.flex-right {
  display: flex;
  justify-content: flex-end;
}
</style>
