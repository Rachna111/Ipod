import React from 'react';
// import Controls from "./Controls";
// import Screen from "./Screen";
import ZingTouch from "zingtouch/src/ZingTouch";

class Skeleton extends React.Component{
    constructor() {
        super();
        this.state = {
            highlight: true,
            angle: 0
        }
    }
    isSelected = () => {
        var val = this.state.highlight;
        this.state.highlight = !val;
        console.log(val, !val)
        var elem = document.getElementsByClassName("icon")[0];
        elem.classList.toggle('selected');
    }
    changeActive = (dir) => {
        console.log(dir)
    }
    handleRotate = () => {
        var obj=this;
        var currentAngle = 0;
        var target = document.getElementById('rotate');
        var region = new ZingTouch.Region(target);
        region.bind(target, 'rotate', function(e) {
            var keys = document.getElementById('rotate');
            currentAngle += e.detail.distanceFromLast;
            keys.style.transform = 'rotate(' + currentAngle + 'deg)'
            // var data= [
            //     ['angle', Math.floor(e.detail.distanceFromLast) + "°"]
            // ];
            if(Math.floor(e.detail.distanceFromLast)>0){
                obj.changeActive("c")
            } else if(Math.floor(e.detail.distanceFromLast)<0){
                obj.changeActive("cc")
            }
            // for (var i = 0; i < data.length; i++) {
            //     console.log(data[i][1]>0? "left": "right");
            //
            //     if(data[i][1]>0){
            //         console.log("left");
            //     }else if(data[i][1]<0){
            //         console.log("right");
            //     }
            // }
        })
    }
    render() {
        const { highlight } = this.state;
        const { angle } = this.state;
        return(
            <div className="back-cover" style={styles.cover}>
                <div className="ip_struct" style={styles.main}>
                    <div className="screen" style={styles.screen}>
                        <div className="sidepan" style={styles.div}>
                            <div style={styles.title}>iPod.js</div>
                            <div className="options">
                                <div className="icon" onClick={this.isSelected} >&ensp;Cover Flow
                                    <img alt=""
                                         src="https://image.flaticon.com/icons/svg/860/860828.svg" />
                                </div>
                                <div className="icon">&ensp;Music</div>
                                <div className="icon">&ensp;Games</div>
                                <div className="icon">&ensp;Settings</div>
                            </div>

                        </div>
                    </div>
                    <div className="controls" style={styles.control}>
                        <div id="keys" style={styles.btns}>
                            <div className="rotate" id="rotate" onMouseOver={this.handleRotate}>{angle}</div>

                            <span className="menu-btn" style={styles.menu}>MENU</span>


                            <img className="fwd"
                                 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-forward-256.png"/>

                            <img className="bkd"
                                 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-backward-128.png"/>

                            <img className="play-pause"
                                 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/play-128.png"/>

                            <div className="play">

                            </div>
                            <div className="click" onClick={this.changeMenu}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// class Skeleton extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             active: [
//                 {
//                     clicked: false
//                 },
//                 {
//                     clicked: true
//                 },
//                 {
//                     clicked: false
//                 },
//                 {
//                     clicked: false
//                 },
//                 {
//                     clicked: false
//                 }
//             ]
//         }
//     }
//     handleActive = (item) => {
//         const { active } = this.state;
//         const index = active.indexOf(item);
//         active[index].clicked = true;
//
//         console.log(active.clicked)
//
//     }
//     render() {
//         const { active } = this.state;
//         return (
//             <div className="back-cover" style={styles.cover}>
//                 <div className="ip_struct" style={styles.main}>
//                     <div className="screen" style={styles.screen}>
//                         {active.map((act) => {
//                             return (
//                                 <Side
//                                     item={act}
//                                     key={act.id}
//                                     onActive={this.handleActive}
//                                 />
//                             )
//                         })}
//                         <Side />
//                     </div>
//                     <Controls />
//                 </div>
//             </div>
//         );
//     }
// }
// const Skeleton = (props) => {
//     return (
//         <div className="back-cover" style={styles.cover}>
//             <div className="ip_struct" style={styles.main}>
//                 <Screen />
//                 <Controls />
//             </div>
//         </div>
//     );
// }

const styles = {
    cover: {
        width: 300,
        height: 500,
        background: '#cccc',
        margin: '40px auto',
        borderRadius: 30,
        zIndex: -9,
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.4)'
    },
    main: {
        width: 300,
        height: 500,
        background: '#f0f0f0',
        margin: 'auto',
        overflow: 'hidden',
        borderRadius: 30,
        position: 'relative',
        top: -8,
        left: 8
    },
    screen: {
        width: 260,
        height: 200,
        background: '#2e2e2e',
        margin: '20px auto',
        border: '4px solid #555555',
        webkitBorderRadius: 5,
        mozBorderRadius: 5,
        borderRadius: 5
    },
    control: {
        width: 260,
        height: 230,
        margin: 'auto',
        overflow: 'hidden',
        position: 'relative'
    },
    btns: {
        width: 210,
        height: 210,
        background: 'white',
        margin: '10px auto',
        overflow: 'hidden',
        WebkitBorderRadius: '100%',
        MozBorderRadius: '100%',
        borderRadius: '100%',
        webkitBorderShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
        mozBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)'
    },
    menu: {
        display: 'block',
        position: 'absolute',
        top: 32,
        left: 107,
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        cursor: 'default'
    },
    control: {
        width: 260,
        height: 230,
        margin: 'auto',
        overflow: 'hidden',
        position: 'relative'
    },
    btns: {
        width: 210,
        height: 210,
        background: 'white',
        margin: '10px auto',
        overflow: 'hidden',
        WebkitBorderRadius: '100%',
        MozBorderRadius: '100%',
        borderRadius: '100%',
        webkitBorderShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
        mozBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)'
    },
    menu: {
        display: 'block',
        position: 'absolute',
        top: 32,
        left: 107,
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'gray',
        cursor: 'default'
    },
    div: {
        height: 'inherit',
        width: '45%',
        background: 'white'
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-evenly'
    },
    title: {
        fontFamily: '-apple-system-headline',
        fontSize: '1.55em',
        paddingTop: '10%',
        paddingBottom: '10%',
        color: 'black',
        paddingLeft: '5%'
    },
    select: {
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '0px 9px black'
    }
}

export default Skeleton;