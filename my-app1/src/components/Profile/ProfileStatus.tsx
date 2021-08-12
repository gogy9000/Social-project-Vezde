import React from 'react';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
    status: string
}
type MapDispatchToProps = {
    updateStatus: (status: string) => void
}
type OwnProps = {

}



type PropsType = MapStateToPropsType & MapDispatchToProps & OwnProps

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode = () => {

        this.setState({
            editMode: true
        })



    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)


    }
    onStatusChange = (e: any) => {
        this.setState({ status: e.currentTarget.value })

    }
    componentDidUpdate(prevProps: MapStateToPropsType, prevState: AppStateType) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })


            console.log('componentDidUpdate')
        }
    }

    render() {
        console.log('render')

        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status ? this.props.status : '-------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>}
            </>
        )


    }
}

export default ProfileStatus;