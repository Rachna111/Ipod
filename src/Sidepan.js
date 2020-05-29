import React from 'react';

class Side extends React.Component {
    constructor() {
        super();
        this.state = {
            highlight: true
        }
    }
    isSelected = () => {
        var val = this.state.highlight;
        this.state.highlight = !val;
        console.log(val, !val)
        var elem = document.getElementsByClassName("icon")[0];
        elem.classList.toggle('selected');
    }
    // style={this.state.highlight? styles.select : null}
    render() {
        const { highlight } = this.state;
        return(
            <div className="sidepan" style={styles.div}>
                <div style={styles.title}>iPod.js</div>
                <div className="options">
                    <div className="icon" onClick={this.isSelected} >&ensp;Cover Flow
                        {/*<i className="fas fa-chevron-right"></i>*/}
                        <img alt=""
                             src="https://image.flaticon.com/icons/svg/860/860828.svg" />
                    </div>
                    <div className="icon">&ensp;Music</div>
                    <div className="icon">&ensp;Games</div>
                    <div className="icon">&ensp;Settings</div>
                </div>

            </div>
        );
    }

}

const styles = {
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

export default Side;