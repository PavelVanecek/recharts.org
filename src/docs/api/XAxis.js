export default {
  name: 'XAxis',
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the axis do not display in the chart.',
        'zh-CN': '是否隐藏 x 轴。',
      },
    },
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The key of data displayed in the axis.',
        'zh-CN': '指定展示的数据维度。',
      },
    },
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The unique id of x-axis.',
        'zh-CN': 'x 轴的唯一 id。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of axis which is usually calculated internally.',
        'zh-CN': 'x 轴的宽度，一般在图表内部计算。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '30',
      isOptional: false,
      desc: {
        'en-US': 'The height of axis, which can be setted by user.',
        'zh-CN': 'x 轴的高度，这个可以根据需要进行配置。',
      },
    },
    {
      name: 'orientation',
      type: "'bottom' , 'top'",
      defaultVal: "'bottom'",
      isOptional: false,
      desc: {
        'en-US': 'The orientation of axis',
        'zh-CN': 'x 轴的位置。',
      },
    },
    {
      name: 'type',
      type: "'number' | 'category'",
      defaultVal: "'category'",
      isOptional: false,
      desc: {
        'en-US': 'The type of axis.',
        'zh-CN': 'x 轴的类型：数值轴、类目轴。',
      },
    },
    {
      name: 'allowDecimals',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'Allow the ticks of XAxis to be decimals or not.',
        'zh-CN': '是否允许小数类型的刻度。',
      },
    },
    {
      name: 'allowDataOverflow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          "When domain of the axis is specified and the type of the axis is 'number', if allowDataOverflow is set to be false, the domain will be adjusted when the minimum value of data is smaller than domain[0] or the maximum value of data is greater than domain[1] so that the axis displays all data values. If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.",
        'zh-CN':
          '当轴是数值轴时，指定轴的定义域（domain）的时候，如果 allowDataOverflow 的值为 false，我们会根据数据的最大值和最小值来调整 domain，确保所有的数据能够展示。如果 allowDataOverflow 的值为 true，不会调整 domain ，而是将相应的图形元素会直接裁剪掉。',
      },
    },
    {
      name: 'allowDuplicatedCategory',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'Allow the axis has duplicated categorys or not when the type of axis is "category".',
        'zh-CN': '是否允许类目轴有重复的类目。',
      },
    },
    {
      name: 'angle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The angle of axis ticks.',
        'zh-CN': '轴刻度的角度。',
      },
    },
    {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: {
        'en-US': "The count of axis ticks. Not used if 'type' is 'category'.",
        'zh-CN': "刻度数。如果'type'是'category'，则不使用。",
      },
    },
    {
      name: 'domain',
      type: 'Array | Function',
      defaultVal: "[0, 'auto']",
      isOptional: true,
      desc: {
        'en-US':
          "Specify the domain of axis when the axis is a number axis. The length of domain should be 2, and we will validate the values in domain. And each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100', or a function that accepts a single argument and returns a number. If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks. If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.",
        'zh-CN':
          '当 x 轴是数值轴时，通过这个配置可以指定 x 轴刻度函数的定义域。这个配置是一个二元数组，数组中的元素可以是一个数值，"auto", "dataMin", "dataMax" 或者类似于"dataMin - 100", "dataMax + 200"这样的字符串。如果任意元素的取值为"auto"，我们会生成可读性高的刻度，并且保证设置的刻度数。如果是函数，则接收“[dataMin, dataMax]”，并且必须将计算域返回为“[min, max]”。',
      },
      format: [
        "<XAxis type=\"number\" domain={['dataMin', 'dataMax']} />",
        '<XAxis type="number" domain={[0, \'dataMax\']} />',
        "<XAxis type=\"number\" domain={['auto', 'auto']} />",
        '<XAxis type="number" domain={[0, \'dataMax + 1000\']} />',
        "<XAxis type=\"number\" domain={['dataMin - 100', 'dataMax + 100']} />",
        '<XAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />',
        '<XAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />',
      ],
      examples: [
        {
          name: 'Numeric XAxis with specified domain',
          url: '/examples/VerticalLineChartWithSpecifiedDomain',
        },
      ],
    },
    {
      name: 'includeHidden',
      type: 'Boolean',
      defaultVal: "false",
      isOptional: true,
      desc: {
        'en-US':
          "Ensures that all datapoints within a chart contribute to its domain calculation, even when they are hidden",
        'zh-CN':
          '确保图表中的所有数据点都有助于其域计算，即使它们被隐藏时也是如此',
      },
      format: [
        "<XAxis type=\"number\" includeHidden />",
      ],
    },
    {
      name: 'interval',
      type: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | Number',
      defaultVal: "'preserveEnd'",
      isOptional: false,
      desc: {
        'en-US':
          'If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd", the ticks which is to be shown or hidden will be calculated automatically.',
        'zh-CN':
          '当值为0时，所有的刻度都会展示。如果值为1，则会间隔1个刻度来展示相应的刻度。当值为 "preserveStart" 时，根据刻度的宽度自动计算间隔，在有足够的空间的情况下，会从头部的刻度开始计算。当值为 "preserveEnd" 时，会从尾部的刻度开始计算是否展示。当值为"preserveStartEnd"，会从头部、尾部的刻度开始计算向中间计算是否展示。',
      },
      examples: [
        {
          name: 'the meaning of different interval',
          url: '/examples/LineChartAxisInterval',
        },
      ],
    },
    {
      name: 'padding',
      type: 'Object | "gap" | "no-gap"',
      defaultVal: '{ left: 0, right: 0 }',
      isOptional: false,
      desc: {
        'en-US': 'Specify the padding of x-axis.',
        'zh-CN': '指定内边距。',
      },
      format: [
        '<XAxis padding={{ left: 10 }} />',
        '<XAxis padding={{ right: 20 }} />',
        '<XAxis padding={{ left: 20, right: 20 }} />',
        '<XAxis padding="gap"',
        '<XAxis padding="no-gap"',
      ],
      examples: [
        {
          name: 'XAxis with non-zero padding',
          url: '/examples/LineChartWithXAxisPadding',
        },
      ],
    },
    {
      name: 'minTickGap',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: {
        'en-US': 'The minimum gap between two adjacent labels.',
        'zh-CN': '两个刻度之前最小间隔宽度。',
      },
    },
    {
      name: 'axisLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
        'zh-CN': '轴线配置。当值为 false 时，不绘制轴线。当值为对象类型时，会把这个对象解析成轴线的属性配置。',
      },
    },
    {
      name: 'tickLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If set false, no axis tick lines will be drawn. If set a object, the option is the configuration of tick lines.',
        'zh-CN': '刻度线配置。当值为 false 时，不绘制刻度线。当值为对象类型时，会把这个对象解析成刻度线的属性配置。',
      },
    },
    {
      name: 'tickSize',
      type: 'Number',
      defaultVal: '6',
      isOptional: false,
      desc: {
        'en-US': 'The length of tick line.',
        'zh-CN': '刻度线的长度。',
      },
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The formatter function of tick.',
        'zh-CN': '刻度的格式化函数。',
      },
    },
    {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'Set the values of axis ticks manually.',
        'zh-CN': '指定需要展示的刻度。',
      },
    },
    {
      name: 'tick',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks.',
        'zh-CN':
          '刻度配置。当值为 false 时，不绘制刻度。当值为对象类型时，会把这个对象解析成刻度的属性配置。当值为 React element，会克隆这个元素来渲染刻度。',
      },
      format: [
        '<XAxis tick={false} />',
        "<XAxis tick={{stroke: 'red', strokeWidth: 2}} />",
        '<XAxis tick={<CustomizedTick />} />',
      ],
      examples: [
        {
          name: 'A line chart with customized x-axis tick',
          url: '/examples/CustomizedLabelLineChart',
        },
      ],
    },
    {
      name: 'mirror',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.',
        'zh-CN': '如果值为 true , 将刻度展示在轴的内侧，而不是外侧。',
      },
    },
    {
      name: 'reversed',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'Reverse the ticks or not.',
        'zh-CN': '是否反转刻度的顺序',
      },
    },
    {
      name: 'label',
      type: 'String | Number | ReactElement | Object',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If an object, the option is the props of a new Label instance.',
        'zh-CN':
          '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。如果一个对象，该选项是一个新的Label实例的道具。',
      },
      format: [
        '<XAxis label="Height" />',
        '<XAxis label={<CustomizedLabel />} />',
        '<XAxis label={{ value: "XAxis Label" }} />',
      ],
      examples: [
        {
          name: 'A composed chart with axis labels',
          url: '/examples/ComposedChartWithAxisLabels',
        },
      ],
    },
    {
      name: 'scale',
      type: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
        'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' |
        'threshold' | Function`,
      defaultVal: 'auto',
      isOptional: false,
      desc: {
        'en-US': `If set to 'auto', the scale function is decided by the type of chart, and the props type.
When set to 'time', make sure to also set type to 'number' and to include a domain.`,
        'zh-CN': '当值为 "auto" 时，会根据图表类型来生成 scale 函数，也可以传入自定义的函数作为 scale 函数。',
      },
      format: [
        '<XAxis scale="log" />',
        `
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(Math.E);

...
  <XAxis scale={scale} />
...
`,
      ],
    },
    {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
        'zh-CN': 'x 轴展示数据的单位。这个单位会展示在 Tooltip 的数值后面。',
      },
    },
    {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
        'zh-CN': 'x 轴展示数据的名称。这个单位会展示在 Tooltip 内容中。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the ticks of this axis',
        'zh-CN': '刻度 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the the ticks of this axis',
        'zh-CN': '刻度 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the ticks of this axis',
        'zh-CN': '刻度 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the ticks of this axis',
        'zh-CN': '刻度 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the ticks of this axis',
        'zh-CN': '刻度 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the ticks of this axis',
        'zh-CN': '刻度 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the ticks of this axis',
        'zh-CN': '刻度 moustenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the ticks of this axis',
        'zh-CN': '刻度 mouseleave 事件的回调函数。',
      },
    },
    {
      name: 'tickMargin',
      type: 'Number',
      isOptional: true,
      desc: {
        'en-US': 'The margin between tick line and tick.',
        'zh-CN': '刻度线和刻度之间的间隔。',
      },
    },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'LineChart', 'ComposedChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
