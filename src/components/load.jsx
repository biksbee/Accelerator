import loadable from '@loadable/component'


const OtherComponent = loadable(() => import('./Body'))

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  )
}

export default MyComponent