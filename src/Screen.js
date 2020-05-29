import React from 'react';
import Side from "./Sidepan";

class Screen extends React.Component {
    render() {
        return(
            <div className="screen" style={styles.screen}>
                <Side />
            </div>
        );
    }

}

const styles = {
    screen: {
        width: 260,
        height: 200,
        background: '#2e2e2e',
        margin: '20px auto',
        border: '4px solid #555555',
        webkitBorderRadius: 5,
        mozBorderRadius: 5,
        borderRadius: 5
    }
}

export default Screen;