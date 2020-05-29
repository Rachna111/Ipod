import React from 'react';
import ZingTouch from "zingtouch/src/ZingTouch";

class Controls extends React.Component{
    constructor() {
        super();
        this.state = {
            angle: 0,
        }
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
        render(){
        const { angle } = this.state;
            return(
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
            );
        }
}

const styles = {
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
    }
}


export default Controls;