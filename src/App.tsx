import Header from "@/components/header"
import Title from "./components/title/Title"
import CheckIcon from "./components/icons/checkIcons"

function App() {
  return (
  <div style={{ fontFamily: 'Manrope, sans-serif' }}>
    <Header />
    <div className="itemSection bg-gradient-to-b from-[#f8f8f8] to-[#ffffff] h-[800px]">
     <Title title="Wait ! your order in progress." smallSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
    <div className="flex">
       <CheckIcon text="Success Message" type="success" />
     <CheckIcon text="Success Message" type="success" />
      <CheckIcon text="Success Message" type="success" />
       <CheckIcon text="Success Message" type="success" />
    </div>
    
    </div>
  </div>
  )
}

export default App
