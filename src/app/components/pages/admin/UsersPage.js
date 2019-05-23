import React from 'react';
import { Route, Link } from "react-router-dom";


export default class UsersPage extends React.Component {

    componentDidMount() {
        $('.ui.accordion').accordion();
    }

	render() {
		return (
			<div className="context admin-menu">
				{/*<div className="ui bottom attached segment pushable">*/}
				<div className="">
					<div className="ui left demo vertical inverted sidebar labeled icon menu">
						<a className="item active" href="/">
							<i className="icon"></i>
							<span>تنظیمات</span>
						</a>
						<a className="item settings" href="/">
							<i className="users icon"></i>
							<span>کاربران</span>
						</a>
						<a className="item" href="/">
							<i className="list icon"></i>
							<span>درخواست‌ها</span>
						</a>
					</div>

					<div className="pusher">
						<div className="admin-users">
							<div className="ui segment">
								<h2 className="ui dividing header">
									<i className="users icon"></i>
									<div className="content">
										<span>کاربران</span>
									</div>
								</h2>


								<table className="ui celled striped table">
									<thead>
										<tr>
											<th>کد</th>
											<th>موبایل</th>
											<th>نام</th>
											<th>نام خانوادگی</th>
											<th>آخرین ورود</th>
											<th>وضعیت</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>۱</td>
											<td>۰۹۱۲۱۲۳۴۵۶۷</td>
											<td>فرزاد</td>
											<td>مهانیان</td>
											<td>January 11, 2014</td>
											<td>
												<div className="ui red horizontal label">غیر فعال</div>
											</td>
										</tr>
										<tr>
											<td>۲</td>
											<td>۰۹۱۲۷۶۵۴۳۲۱</td>
											<td>نیما</td>
											<td>بغدادی</td>
											<td>January 11, 2014</td>
											<td>
												<div className="ui green horizontal label">فعال</div>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th colSpan="7">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}