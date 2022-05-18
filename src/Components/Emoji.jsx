import React from 'react'
import emojidata from '../emojidata'

const Emoji = () => {

    const smile = "https://tse1.mm.bing.net/th?id=OIP.GkNOaMKQFP-W2XclDSYMJwHaHa&pid=Api&P=0&w=169&h=169"
    const happy = "https://tse4.mm.bing.net/th?id=OIP.F0PF6QS_hmDKXcKaodzXcQHaHa&pid=Api&P=0&w=169&h=169"
    const sad = "https://www.pinclipart.com/picdir/middle/346-3467401_crying-sad-emoji-png-whatsapp-new-emoji-2018.png"

    const [emoji , setEmoji] = React.useState("")
    

    const handleChange = (event) => {
        smile && setEmoji(<img src={smile} />)
        happy && setEmoji(<img src={happy} />) 
        sad && setEmoji(<img src={sad} />)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }
    console.log(emoji)

  return (
    <div>
        <div>{emoji}</div>
      <form onSubmit={handleSubmit} className="main">
        <input type="text" placeholder='Enter Emoji' onChange={handleChange} />
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  )
}

export default Emoji


//sad --- 128532
//happy --- 128512
//smiley --- 128522


//smile --- https://tse1.mm.bing.net/th?id=OIP.GkNOaMKQFP-W2XclDSYMJwHaHa&pid=Api&P=0&w=169&h=169
//happy --- https://tse4.mm.bing.net/th?id=OIP.F0PF6QS_hmDKXcKaodzXcQHaHa&pid=Api&P=0&w=169&h=169
//sad --- https://www.pinclipart.com/picdir/middle/346-3467401_crying-sad-emoji-png-whatsapp-new-emoji-2018.png
