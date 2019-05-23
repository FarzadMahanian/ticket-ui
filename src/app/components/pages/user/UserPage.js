import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment-jalaali";
import {Modal, Button, Icon} from "semantic-ui-react";

import TicketDetailModal from './TicketDetailModal';
import AddTicketModal from './AddTicketModal';
import MessageBox from '../../common/MessageBox';
import * as http from '../../../services/HttpServices';
import * as AuthActions from '../../../actions/AuthActions';

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            province_code: 1,
            city_code: 82,
            tourism: 1,
            category: 1,
            isSaving: false,
            isSuccessfull: false,
            showNewTicketModal: false
        }
    }

    componentDidMount() {
        // $('.ui.accordion').accordion();
        this.loadListData();
    }

    loadListData() {
        http.auth_post('api/getTicketList?_format=json', {}, this.props).then((result) => {
            this.setState({
                listData: result.data
            });
        });
    }

    render() {
        let {listData, showNewTicketModal} = this.state;
        return (
            <div id="complete-form">
                <TicketDetailModal ref={(modal) => this._ticketDetailModal = modal}/>
                <Modal className="add-ticket-wrapper" closeIcon onClose={()=>this.handleNewTicketModal(false)} open={showNewTicketModal}>
                    <AddTicketModal></AddTicketModal>
                </Modal>

                {this.state.isSuccessfull ?
                    <MessageBox title="موفقیت" message="پیام شما با موفقیت در سیستم ثبت شد." type="success"/> : null}
                <div className="title ui primary button" onClick={()=>this.handleNewTicketModal(true)}>
                    <i className="plus icon"></i>
                    <span>ایجاد درخواست جدید</span>
                </div>

                <div id="tickets" className="ui segment">
                    <h2 className="ui dividing header" onClick={this.handleMessage}>لیست تمامی درخواست‌ها</h2>
                    <div>
                        <table className="ui celled striped table">
                            <thead>
                            <tr>
                                <th>کد</th>
                                <th>عنوان</th>
                                <th>تاریخ ایجاد</th>
                                <th>وضعیت</th>
                                <th>عملیات</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listData.map((item, i) =>
                                    (<tr key={i} onClick={() => this.handleShowTiketDetail(item.id)}>
                                        <td>#{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{this.renderDate(item.created)}</td>
                                        <td>
                                            {this.renderState(item.status)}
                                        </td>
                                        <td>
                                            <Button size='mini'>
                                                <Icon size='large' name='edit' />
                                                <span>ویرایش</span>
                                            </Button>
                                        </td>
                                    </tr>)
                                )
                            }
                            </tbody>
                            {/* <tfoot>
							<tr>
								<th colSpan="4">
									<div className="ui right floated pagination menu">
										<a className="icon item">
											<i className="left chevron icon"></i>
										</a>
										<a className="item">1</a>
										<a className="item">2</a>
										<a className="item">3</a>
										<a className="item">4</a>
										<a className="icon item">
											<i className="right chevron icon"></i>
										</a>
									</div>
								</th>
							</tr>
							</tfoot> */}
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    handleNewTicketModal= (visible) => {
        this.setState({
            showNewTicketModal: visible
        })
    }

    handleSaveTicket = () => {
        let title = this.refs.title.value;
        let description = this.refs.description.value;
        let province_code = this.refs.province.value;
        let city_code = this.refs.city.value;
        let category_code = this.refs.category.value;
        let tourism_code = this.refs.tourism.value;

        let {token} = this.props;
        this.setState({isSuccessfull: false, isSaving: true});
        http.auth_post('api/saveTicket?_format=json', {
            title,
            answers: [{value: description}],
            province_code,
            city_code,
            category_code,
            tourism_code
        }, this.props).then((result) => {
            this.setState({isSuccessfull: true, isSaving: false});
            this.loadListData();
        }).catch(() => {
            this.setState({isSuccessfull: false, isSaving: false});
        });
    }

    handleShowTiketDetail = (id) => {
        let {token} = this.props;
        http.auth_post('api/getTicket?_format=json&id=' + id, {}, this.props).then((result) => {
            this._ticketDetailModal.show(result.data);
        });
    }

    renderState = (status) => {
        switch (status) {
            case 'new':
                return <div className="ui yellow horizontal label">جدید</div>;
            case 'cancel':
                return <div className="ui gray horizontal label">بسته شده</div>;
            case 'open':
                return <div className="ui blue horizontal label">در حال بررسی</div>;
            case 'solved':
                return <div className="ui green horizontal label">برطرف شده</div>;
            default:
                return null;
        }
    }

    renderDate = (timestamp) => {
        let date = moment(parseInt(timestamp) * 1000);
        return date.format('jYYYY/jM/jD');
    }

    handleMessage = () => {
        this.setState({showMessage: !this.state.showMessage})
    };

}

let mapStateToProps = (store) => {
    return {
        token: store.auth.token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getToken: () => dispatch(AuthActions.getToken()),
        logout: () => dispatch(AuthActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);