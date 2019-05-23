import React from 'react';
import { Route, Link } from "react-router-dom";

import TicketDetailModal from '../user/TicketDetailModal';

export default class TicketsPage extends React.Component {

    componentDidMount() {
        $('.ui.accordion').accordion();
    }

	render() {
		return (
			<div className="context admin-menu">
				<div className="ui bottom attached segment pushable">
					<div className="ui left demo vertical inverted sidebar labeled icon menu">
						<a className="item" href="/">
							<i className="settings icon"></i>
							<span>تنظیمات</span>
						</a>
						<a className="item" href="/">
							<i className="users icon"></i>
							<span>کاربران</span>
						</a>
						<a className="item active" href="/">
							<i className="list icon"></i>
							<span>درخواست‌ها</span>
						</a>
					</div>

					<div className="pusher">
						<div className="admin-tickets">
							<div className="ui segment">
								<h2 className="ui dividing header">
									<i className="list icon"></i>
									<div className="content">
										<span>درخواست‌ها</span>
									</div>
								</h2>

								<table className="ui celled striped table">
									<thead>
										<tr>
											<th>کد</th>
											<th>تاریخ ایجاد</th>
											<th>آدرس ایمیل</th>
											<th>وضعیت</th>
										</tr>
									</thead>
									<tbody>
										<tr onClick={()=>this._ticketDetailModal.show()}>
											<td>۱</td>
											<td>September 14, 2013</td>
											<td>jhlilk22@yahoo.com</td>
											<td>
												<div className="ui red horizontal label">غیر فعال</div>
											</td>
										</tr>
										<tr onClick={()=>this._ticketDetailModal.show()}>
											<td>۲</td>
											<td>January 11, 2014</td>
											<td>jamieharingonton@yahoo.com</td>
											<td>
												<div className="ui green horizontal label">فعال</div>
											</td>
										</tr>
									</tbody>
									<tfoot>
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
									</tfoot>
								</table>


								<div className="ui segment">
									<h2 className="ui dividing header">فرم ثبت شکایات و انتقادات</h2>

									<div className="ui accordion">
										<div className="title ui primary button">
											<i className="dropdown icon"></i>
											<span>ایحاد درخواست جدید</span>
										</div>

										<div className="content">
											<div className="ui divider"></div>
											<div className="transition visible">
												<form className="ui form" id="complete-form-form">

													<div className="two fields">
														<div className="field">
															<label>استان</label>
															<select className="ui fluid dropdown" id="selectProvince">
																<option value="">استان</option>
															</select>
														</div>
														<div className="field">
															<label>شهر</label>
															<select className="ui fluid dropdown" id="selectCity">
																<option value="">شهر</option>
															</select>
														</div>
													</div>

													<div className="two fields">
														<div className="field">
															<label>اماکن</label>
															<select className="ui fluid dropdown" id="selectTourism">
																<option value="">اماکن</option>
															</select>
														</div>
														<div className="field">
															<label>دسته بندی</label>
															<select className="ui fluid dropdown" id="selectCategory">
																<option value="">دسته بندی</option>
															</select>
														</div>
													</div>

													<div className="two fields">
														<div className="field">
															<label>جستجوی عنوان</label>
															<select className="ui fluid search dropdown" multiple="" id="selectTopic">
																<option value="">جستجوی عنوان</option>
															</select>
														</div>
														<div className="field">
															<label>موبایل</label>
															<input type="text" name="mobile" placeholder="موبایل" />
														</div>
													</div>

													<div className="two fields">
														<div className="field">
															<label>نام</label>
															<input type="text" name="firstname" placeholder="نام" />
														</div>
														<div className="field">
															<label>نام خانوادگی</label>
															<input type="text" name="lastname" placeholder="نام خانوادگی" />
														</div>
													</div>

													<div className="field">
														<label>توضیحات</label>
														<textarea id="answers" required></textarea>
													</div>
													<button className="fluid ui primary button" type="submit">ثبت درخواست</button>
												</form>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

						<TicketDetailModal ref={(modal) => this._ticketDetailModal=modal}/>
					</div>
				</div>
			</div>
		)
	}

}