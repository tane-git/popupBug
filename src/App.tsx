import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Collapse, Drawer, Popover, Typography } from 'antd'
const { Text } = Typography
const { Panel } = Collapse

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Drawer
        visible={true}
      >
        <Collapse>
          <Panel key='1' header='hi'>
            <Popover
              getPopupContainer={trigger => trigger.parentNode as HTMLElement}
              content='hi'
            >
              <img src='public/vite.svg' />
            </Popover>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum sagittis tellus. Phasellus semper non augue id maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at turpis pharetra, dictum magna nec, vehicula elit. Nullam maximus libero nec arcu facilisis, id volutpat mauris porttitor. Aliquam venenatis dapibus ullamcorper. Morbi elit nisi, cursus vitae pellentesque at, facilisis vitae erat. Ut egestas mauris posuere sodales sollicitudin. Fusce condimentum risus quis felis mollis tincidunt. Phasellus venenatis eget urna eget tempor. Maecenas euismod orci nec ex pellentesque auctor id quis tortor. Praesent vitae egestas nunc, sit amet auctor ex. Vivamus blandit nulla sed leo dictum viverra. Ut ullamcorper lacus sit amet tortor blandit blandit. Praesent vitae libero nibh. Suspendisse at sapien dui.  Curabitur commodo ultricies enim placerat pellentesque. Sed at nisl vel risus egestas faucibus. Pellentesque velit odio, vulputate et maximus et, placerat at libero. Nam faucibus tincidunt dolor, ac congue eros auctor non. Nulla at mollis velit, et interdum mi. Praesent scelerisque metus lorem. In malesuada metus nec enim consectetur, a fringilla arcu convallis. Nam finibus sodales felis quis fringilla. Fusce quis mauris condimentum, interdum metus at, vulputate arcu. Nullam ligula risus, egestas nec suscipit ac, euismod vel ante. Vivamus sodales ex sed gravida feugiat. Curabitur faucibus venenatis tincidunt.  Suspendisse mattis dolor pulvinar convallis tincidunt. Nam ac nulla sed urna varius sollicitudin quis eget ligula. Duis odio orci, semper a euismod accumsan, elementum eget elit. Pellentesque suscipit quam ut nisl posuere congue. Donec bibendum, velit at sodales posuere, nibh velit dignissim ex, eget iaculis ex dolor sed quam. Sed a leo leo. Donec vulputate, lacus sit amet efficitur fermentum, elit metus consectetur odio, eu tincidunt est metus in tortor. Nulla faucibus tellus vel gravida dictum. Maecenas molestie orci nulla, ut scelerisque nulla faucibus sit amet. Sed dignissim massa id ipsum pretium placerat. Nunc accumsan nisi justo, in vestibulum turpis convallis et. Ut eros metus, vestibulum nec est sed, venenatis vestibulum eros. Nulla nec aliquet elit, ac volutpat mauris. Curabitur laoreet metus velit, vel maximus mi gravida in.  Curabitur in ex quis dui gravida scelerisque. Maecenas a erat magna. Mauris nulla risus, malesuada at arcu ac, aliquet imperdiet velit. Vestibulum maximus justo convallis sapien feugiat imperdiet. Mauris consequat non justo vel aliquam. Duis volutpat semper posuere. Etiam auctor consectetur felis, vitae imperdiet felis. Fusce tempus et neque sed molestie.  Nulla facilisi. Sed ac condimentum est. Fusce vitae auctor ligula. In consectetur, turpis et ultrices ultrices, nibh est pulvinar magna, eu sagittis lorem nisl sit amet ex. Mauris magna metus, mattis id orci sit amet, laoreet tristique sapien. Integer a turpis porta, cursus mauris vitae, sodales mauris. Morbi varius finibus massa a feugiat. Fusce sed facilisis urna, non fringilla odio.
            </Text>
          </Panel>
        </Collapse>
      </Drawer>
    </div>
  )
}

export default App
