import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer'
import Posts from './Posts'




class Post1Container extends React.Component {
    componentDidMount() {

    }

    render() {

        return <>
            {this.props.profile ? 'ответ пришел' : 'ответ еще не пришел'}
            <Posts {...this.props}
                Profile_Page={this.props.Profile_Page}
                profile={this.props.profile} />
        </>

    }
}
let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Post_item_data: state.Profile_Page.Post_item_data,
    New_Post_Text: state.Profile_Page.New_Post_Text
})



export default connect(mapStateToProps, { setUserProfile })(Post1Container);
