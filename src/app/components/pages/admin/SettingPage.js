import React from 'react';
import { Route, Link } from "react-router-dom";


export default class SettingPage extends React.Component {

	render() {
		return (

			<div className="context admin-menu">
				<div className="ui bottom attached segment pushable">
					<div className="ui left demo vertical inverted sidebar labeled icon menu">
						<a className="item active" href="/">
							<i className="settings icon"></i>
							<span>تنظیمات</span>
						</a>
						<a className="item" href="/">
							<i className="users icon"></i>
							<span>کاربران</span>
						</a>
						<a className="item" href="/">
							<i className="list icon"></i>
							<span>درخواست‌ها</span>
						</a>
					</div>

					<div className="pusher">
						<div className="admin-setting">
							<div className="ui segment">
								<h2 className="ui dividing header">
									<i className="settings icon"></i>
									<div className="content">
										<span>نتظیمات</span>
									</div>
								</h2>

								<form className="ui form" id="admin-setting-form">
									<div className="ui attached">
										<div className="two fields">
											<div className="field">
												<label>نام</label>
												<div className="field">
													<input id="firstname" type="text" name="firstname" placeholder="نام" required />
												</div>
											</div>
											<div className="field">
												<label>نام خانوادگی</label>
												<div className="field">
													<input id="lastname" type="text" name="lastname" placeholder="نام خانوادگی" required />
												</div>
											</div>
										</div>
									</div>
									<div className="ui primary bottom attached button" tabIndex="0">تغییر مشخصات</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}