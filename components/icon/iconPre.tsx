import React from 'react';
import { Icon } from './icon'

const { iconName }: {
    iconName: {
        icons: Array<{
            tags: string[];
            icons: string[];
        }>
    }
} = require('./iconNames');

export default class IconPre extends React.Component {
    state = {
        tag: '',
        hover: false
    };

    handleChange(e: any) {
        this.setState({ tag: e.target.value });
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.tag}
                    placeholder="请输入关键字"
                    onChange={this.handleChange.bind(this)}
                ></input>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flext-start',
                    }}
                >
                    {

                        iconName.icons.filter((item) => item.tags.join(' ').indexOf(this.state.tag) != -1).map((item, key) => {
                            return <React.Fragment key={key}>
                                {
                                    item.icons.map((icon, index) => {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    width: 80,
                                                    textAlign: 'center',
                                                    padding: 5,
                                                }}
                                            >
                                                <Icon type={icon} style={{ fontSize: 25 }} />
                                                <div style={{ fontSize: 12 }}>{icon}</div>
                                            </div>
                                        );
                                    })
                                }
                            </React.Fragment>
                        })
                    }
                </div>
            </div>
        )
    }
}