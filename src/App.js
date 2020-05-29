import React from 'react';
import Ipod from "./ipod";

function App() {
    return (
        <div className="App">
            <Ipod/>
        </div>
    );
}
// class App extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             active: [
//                 {
//                     option: Cover,
//                     id: 1,
//                     clicked: true
//                 },
//                 {
//                     option: Music,
//                     id: 2,
//                     clicked: false
//                 },
//                 {
//                     option: Games,
//                     id: 3,
//                     clicked: false
//                 },
//                 {
//                     option: Settings,
//                     id: 4,
//                     clicked: false
//                 },
//             ]
//         }
//     }
//
//     handleActive = (id) => {
//         const { active } = this.state;
//         const items = products.filter((item) => item.id === id);
//         this.setState({
//             active.clicked: !this.state.active.clicked
//
//         })
//
//     }
//     render() {
//         return(
//             <div className="App">
//                 <Ipod />
//             </div>
//         );
//     }
// }

export default App;