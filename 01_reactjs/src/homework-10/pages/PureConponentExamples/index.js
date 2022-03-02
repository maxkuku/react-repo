import React, { memo, useCallback, useRef } from "react";




const generateValue = () => {
    return Math.round(100 + Math.random() * 900)
}


const initialState = (size) => {
    return {
        list: Array.from({length: size || 300}, (_el, index) => ({
            label: `label ${index + 1}`,
            value: generateValue()
        }))
    }
}


export const PureComponentExampleTextIDs = {
    title: 'PureComponentExample_title',
    row: 'PureComponentExample_row',
    rowButton: 'PureComponentExample_rowButton',
    rowRenderCount: 'PureComponentExample_rowRenderCount',
}




export class PureComponentExample extends React.Component {
    state = initialState(this.props.size);

    handleUpdate = (index) => {
        const list = [...this.state.list];

        list[index] = {
            ...list[index],
            value: generateValue()
        }
        this.setState({list})
    }

    render() {


        return <div>
            <h1 data-testid={PureComponentExampleTextIDs.title}>
                Pure Component Example
            </h1>
            <div>
                {this.state.list.map((el, index) => (
                    <Row2
                        key={el.label}
                        data={el}
                        index={index}
                        onUpdate={this.handleUpdate}
                    />
                ))}
            </div>
        </div>

    }
}




export class Row extends React.PureComponent {
    // не показал класс
}


const Row2Render = (props) => {
    const {
        data: {label, value},
        onUpdate,
        index
    } = props;


    const handleUpdate = useCallback(() => {
        onUpdate(index);
    }, [index, onUpdate]);


    const renderCount = useRef(0);


    renderCount.current = ++renderCount.current;


    return (
        <div data-testid={PureComponentExampleTextIDs.row}>
            <span className="label">{label}:</span>
            <span>{value}</span>
            <span data-testid={PureComponentExampleTextIDs.rowRenderCount}>
                ({renderCount.current})
            </span>{" "}
            <button data-testid={PureComponentExampleTextIDs.rowButton} className="button" onClick={handleUpdate}>
                Update
            </button>
        </div>
    )
}


export const Row2 = memo(Row2Render)