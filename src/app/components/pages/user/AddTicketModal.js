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

        return (
[

                <Modal.Header>فرم ثبت شکایات و انتقادات</Modal.Header>,
                <Modal.Content>
                    <div className="transition visible">
                        <div className="ui form" id="complete-form-form">
                            <div className="two fields">
                                <div className="field">
                                    <label>استان</label>
                                    <select className="ui fluid dropdown" ref="province">
                                        <option value="1">آذربایجان شرقی</option>
                                        <option value="2">آذربایجان غربی</option>
                                        <option value="4">اردبیل</option>
                                        <option value="5">اصفهان</option>
                                        <option value="6">البرز</option>
                                        <option value="7">ایلام</option>
                                        <option value="8">بوشهر</option>
                                        <option value="9">تهران</option>
                                        <option value="10">چهارمحال بختیاری</option>
                                        <option value="11">خراسان جنوبی</option>
                                        <option value="12">خراسان رضوی</option>
                                        <option value="13">خراسان شمالی</option>
                                        <option value="14">خوزستان</option>
                                        <option value="15">زنجان</option>
                                        <option value="16">سمنان</option>
                                        <option value="17">سیستان و بلوچستان</option>
                                        <option value="18">فارس</option>
                                        <option value="19">قزوین</option>
                                        <option value="20">قم</option>
                                        <option value="21">کردستان</option>
                                        <option value="22">کرمان</option>
                                        <option value="23">کرمانشاه</option>
                                        <option value="24">کهگیلویه و بویراحمد</option>
                                        <option value="25">گلستان</option>
                                        <option value="26">گیلان</option>
                                        <option value="27">لرستان</option>
                                        <option value="28">مازندران</option>
                                        <option value="29">مرکزی</option>
                                        <option value="30">هرمزگان</option>
                                        <option value="31">همدان</option>
                                        <option value="32">یزد</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>شهر</label>
                                    <select className="ui fluid dropdown" ref="city">
                                        <option value="82">آذر شهر</option>
                                        <option value="83">اسکو</option>
                                        <option value="84">اهر</option>
                                        <option value="85">بستان آباد</option>
                                        <option value="86">بناب</option>
                                        <option value="87">تبریز</option>
                                        <option value="88">جلفا</option>
                                        <option value="89">سراب</option>
                                        <option value="90">شبستر</option>
                                        <option value="91">عجب شیر</option>
                                        <option value="92">کلیبر</option>
                                        <option value="93">مراغه</option>
                                        <option value="94">مرند</option>
                                        <option value="578">منطقه آزاد ارس</option>
                                        <option value="96">میانه</option>
                                        <option value="98">هریس</option>
                                        <option value="99">هشترود</option>
                                    </select>
                                </div>
                            </div>

                            <div className="two fields">
                                <div className="field">
                                    <label>اماکن</label>
                                    <select className="ui fluid dropdown" ref="tourism">
                                        <option className="eghamati" value="1">مراکز اقامتی</option>
                                        <option className="tourism" value="2">مناطق گردشگری</option>
                                        <option className="payane" value="3">پایانه های مسافرتی</option>
                                        <option className="refahi" value="4">خدمات رفاهی</option>
                                        <option className="darmani" value="5">مراکز درمانی</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>دسته بندی</label>
                                    <select className="ui fluid dropdown" ref="category">
                                        <option value="11">اقامتگاه بوم گردی</option>
                                        <option value="10">خانه مسافر</option>
                                        <option value="6">خانه معلم</option>
                                        <option value="5">مهمانپذیر</option>
                                        <option value="1">هتل</option>
                                        <option value="4">هتل آپارتمان</option>
                                        <option value="9">هتل های جهانگردی</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label>جستجوی عنوان</label>
                                <input type="text" ref="title" className="ui fluid search"/>
                            </div>

                            <div className="field">
                                <label>توضیحات</label>
                                <textarea id="answers" ref="description" required></textarea>
                            </div>

                        </div>
                    </div>

                </Modal.Content>,
                <Modal.Actions>
                    <Button primary onClick={this.handleSaveTicket}>ثبت درخواست</Button>
                </Modal.Actions>,
        ]
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