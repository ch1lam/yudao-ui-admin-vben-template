import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '任务编号',
    dataIndex: 'id',
    width: 100
  },
  {
    title: '任务名称',
    dataIndex: 'name',
    width: 180
  },
  {
    title: '处理器的名字',
    dataIndex: 'handlerName',
    width: 180
  },
  {
    title: '处理器的参数',
    dataIndex: 'handlerParam',
    width: 180
  },
  {
    title: 'CRON 表达式',
    dataIndex: 'cronExpression',
    width: 200
  },
  {
    title: '任务状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_JOB_STATUS)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: '任务状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.INFRA_JOB_STATUS)
    },
    colProps: { span: 8 }
  },
  {
    label: '处理器的名字',
    field: 'handlerName',
    component: 'Input',
    colProps: { span: 8 }
  }
]

export const formSchema: FormSchema[] = [
  {
    label: '任务编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '任务名称',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: '处理器的名字',
    field: 'handlerName',
    required: true,
    dynamicDisabled: ({ values }) => !!values.id,
    component: 'Input'
  },
  {
    label: '处理器的参数',
    field: 'handlerParam',
    component: 'Input'
  },
  {
    label: 'CRON 表达式',
    field: 'cronExpression',
    required: true,
    component: 'Input'
  },
  {
    label: '重试次数',
    field: 'retryCount',
    required: true,
    helpMessage: '设置为 0 时，不进行重试',
    component: 'InputNumber'
  },
  {
    label: '重试间隔',
    field: 'retryInterval',
    required: true,
    helpMessage: '单位：毫秒。设置为 0 时，无需间隔',
    component: 'InputNumber',
    suffix: '毫秒'
  },
  {
    label: '监控超时时间',
    field: 'monitorTimeout',
    component: 'Input',
    suffix: '毫秒'
  }
]
