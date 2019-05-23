import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import {Modal, Form, Checkbox, Button} from "semantic-ui-react";


class TicketDetailModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            ticketDetail: {
                answers: []
            }
        }
    }

    componentDidMount() {
    }

    render() {
        let showUserFields = true;
        let {ticketDetail, show} = this.state;
        let {user} = this.props;

        return (

            <Modal className="ticket-detail-wrapper" closeIcon onClose={this.handleClose} open={show}>
                <Modal.Header>جزئیات درخواست</Modal.Header>
                <Modal.Content>
                    <Form className="ui reply form">
                        <div className="ticket-detail">
                            <div className="ui grid">
                                <div className="eight wide column">
                                    <h5 className="ui header">
                                        <span>استان: </span>
                                        <span className="sub header">{ticketDetail.province_code}</span>
                                    </h5>
                                </div>
                                <div className="eight wide column">
                                    <h5 className="ui header">
                                        <span>شهر: </span>
                                        <span className="sub header">{ticketDetail.city_code}</span>
                                    </h5>
                                </div>
                                <div className="eight wide column">
                                    <h5 className="ui header">
                                        <span>اماکن: </span>
                                        <span className="sub header">{ticketDetail.tourism_code}</span>
                                    </h5>
                                </div>
                                <div className="eight wide column">
                                    <h5 className="ui header">
                                        <span>دسته بندی: </span>
                                        <span className="sub header">هتل</span>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <h3 className="ui dividing header"
                            style={{paddingLeft: '15px', paddingRight: '15px', marginBottom: 0}}>جواب‌های درخواست</h3>
                        <div className="scrolling ticket-answers">
                            <div className="ui small minimal comments" style={{maxWidth: '100%'}}>

                                {ticketDetail.answers.map((item, i) => (

                                    <div key={i}
                                         className={"comment " + ((i % 2 == 0) ? "user-comment" : "admin-comment")}>
													<span className="avatar">
															<i className="large user icon"></i>
															<span>{((i % 2 == 0) ? "کاربر" : "ادمین")}</span>
													</span>
                                        <div className="content">
                                            <span className="author">فرزاد مهانیان</span>
                                            <div className="metadata">
                                                <span className="date">امروز ۱۲:۳۰</span>
                                            </div>
                                            <div className="text">
                                                <span>{item.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>


                        <h3 className="ui dividing header">ارسال پاسخ جدید</h3>
                        {showUserFields ?
                            <div className="inline fields">
                                <label htmlFor="status">وضعیت: </label>
                                <Form.Field>
                                    <Checkbox
                                        radio
                                        label={<label>
                                            <div className="ui yellow horizontal label">جدید</div>
                                        </label>}
                                        name="status"
                                        value="new"
                                        checked={ticketDetail.status == "new"}
                                        onChange={this.changeTicketStatus}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        radio
                                        label={<label>
                                            <div className="ui gray horizontal label">بسته شده</div>
                                        </label>}
                                        name="status"
                                        value="closed"
                                        checked={ticketDetail.status == "closed"}
                                        onChange={this.changeTicketStatus}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        radio
                                        label={<label>
                                            <div className="ui blue horizontal label">درحال بررسی</div>
                                        </label>}
                                        name="status"
                                        value="open"
                                        checked={ticketDetail.status == "open"}
                                        onChange={this.changeTicketStatus}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        radio
                                        label={<label>
                                            <div className="ui green horizontal label">برطرف شده</div>
                                        </label>}
                                        name="status"
                                        value="solved"
                                        checked={ticketDetail.status == "solved"}
                                        onChange={this.changeTicketStatus}
                                    />
                                </Form.Field>
                            </div> : null
                        }
                        <div className="field">
                            <textarea></textarea>
                        </div>
                    </Form>

                </Modal.Content>
                <Modal.Actions>
                    <Button primary>ثبت</Button>
                </Modal.Actions>


            </Modal>
        )
    }

    show(ticket) {
        this.setState({
            show: true,
            ticketDetail: ticket
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    changeTicketStatus = (ev, {value}) => {
        this.setState({
            ticketDetail: {
                ...this.state.ticketDetail,
                status: value
            }
        });
    }

}

let mapStateToProps = (store) => {
    return {
        user: store.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

export default TicketDetailModal; //connect(mapStateToProps, mapDispatchToProps)(TicketDetailModal);