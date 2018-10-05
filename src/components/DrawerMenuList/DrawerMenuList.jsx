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
                    icon={<MdInbox />}
                    primaryContent={STRINGS.InboxMenu}
                    secondaryContent="test"
                />
                <DrawerMenuListItem 
                    primaryContent={STRINGS.DraftsMenu}
                />
                <DrawerMenuListItem 
                    primaryContent={STRINGS.SentMenu}
                />
                <DrawerMenuListItem 
                    primaryContent={STRINGS.SpamMenu}
                />
                <DrawerMenuListItem 
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