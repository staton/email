import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdInbox } from 'react-icons/md';
import DrawerMenuListItem from '../DrawerMenuListItem/DrawerMenuListItem';
import STRINGS from '../../resources/strings';

const propTypes = {
};

const defaultProps = {
};

export class DrawerMenuList extends Component {

	render() {
		return (
            <ul className="DrawerMenuList">
                <DrawerMenuListItem 
                    badge={205}
                    linkTo="/inbox"
                    icon={<MdInbox />}
                    primaryContent={STRINGS.InboxMenu}
                    secondaryContent="test"
                />
                <DrawerMenuListItem 
                    linkTo="/drafts"
                    primaryContent={STRINGS.DraftsMenu}
                />
                <DrawerMenuListItem 
                    linkTo="/sent"
                    primaryContent={STRINGS.SentMenu}
                />
                <DrawerMenuListItem 
                    linkTo="/spam"
                    primaryContent={STRINGS.SpamMenu}
                />
                <DrawerMenuListItem 
                    linkTo="/trash"
                    primaryContent={STRINGS.DeletedMenu}
                />
            </ul>
		);
    }

}

function mapStateToProps(store, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    },
    dispatch);
}

DrawerMenuList.propTypes = propTypes;
DrawerMenuList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuList);