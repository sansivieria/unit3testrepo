import React, { useState } from 'react';

<div className="container bootstrap snippets bootdeys">
  <div className="row">
    <div className="col-lg-12">
        <div className="box">
            <div className="mail-box">
                <aside className="sm-side">
                    <div className="user-head">
                        <a href="javascript:;" className="inbox-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="img-responsive">
                        </a>
                        <div className="user-name">
                            <h5><a href="#">Teo Marcello</a></h5>
                            <span><a href="#">user@teomarcello.com</a></span>
                        </div>
                        <a href="javascript:;" className="mail-dropdown pull-right">
                            <i className="fa fa-chevron-down"></i>
                        </a>
                    </div>
                    <div className="inbox-body">
                        <a className="btn btn-compose" data-toggle="modal" href="#myModal" data-original-title="" title="">
                            Compose
                        </a>
                        <Modal>
                        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title">Compose</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">To</label>
                                                <div className="col-lg-10">
                                                    <input type="text" className="form-control" id="inputEmail1" placeholder="">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Cc / Bcc</label>
                                                <div className="col-lg-10">
                                                    <input type="text" className="form-control" id="cc" placeholder="">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Subject</label>
                                                <div className="col-lg-10">
                                                    <input type="text" className="form-control" id="inputPassword1" placeholder="">
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Message</label>
                                                <div className="col-lg-10">
                                                    <textarea name="" id="" className="form-control" cols="30" rows="10"></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-lg-offset-2 col-lg-10">
                                                    <span className="btn green fileinput-button" data-original-title="" title="">
                                                      <i className="fa fa-plus fa fa-white"></i>
                                                      <span>Attachment</span>
                                                      <input type="file" multiple="" name="files[]">
                                                    </span>
                                                    <button type="submit" className="btn btn-send" data-original-title="" title="">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="inbox-nav inbox-divider">
                        <li className="active">
                            <a href="#"><i className="fa fa-inbox"></i> Inbox <span className="label label-danger pull-right">2</span></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
                        </li>
                        <li>
                            <a href="#"><i className=" fa fa-external-link"></i> Drafts <span className="label label-info pull-right">30</span></a>
                        </li>
                        <li>
                            <a href="#"><i className=" fa fa-trash-o"></i> Trash</a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
                        <li> <h4>Labels</h4> </li>
                        <li> <a href="#"> <i className=" fa fa-sign-blank text-danger"></i> Work </a> </li>
                        <li> <a href="#"> <i className=" fa fa-sign-blank text-success"></i> Design </a> </li>
                        <li> <a href="#"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
                        </li><li> <a href="#"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
                        </li><li> <a href="#"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-stacked labels-info ">
                        <li> <h4>Buddy online</h4> </li>
                        <li> <a href="#"> <i className=" fa fa-circle text-success"></i> Jhone Doe <p>I do not think</p></a>  </li>
                        <li> <a href="#"> <i className=" fa fa-circle text-danger"></i> Sumon <p>Busy with coding</p></a> </li>
                        <li> <a href="#"> <i className=" fa fa-circle text-muted "></i> Anjelina Joli <p>I out of control</p></a>
                        </li><li> <a href="#"> <i className=" fa fa-circle text-muted "></i> Jonathan Smith <p>I am not here</p></a>
                        </li><li> <a href="#"> <i className=" fa fa-circle text-muted "></i> Tawseef <p>I do not think</p></a>
                        </li>
                    </ul>
                    <div className="inbox-body text-center">
                        <div className="btn-group">
                            <a href="javascript:;" className="btn mini btn-primary" data-original-title="" title="">
                                <i className="fa fa-plus"></i>
                            </a>
                        </div>
                        <div className="btn-group">
                            <a href="javascript:;" className="btn mini btn-success" data-original-title="" title="">
                                <i className="fa fa-phone"></i>
                            </a>
                        </div>
                        <div className="btn-group">
                            <a href="javascript:;" className="btn mini btn-info" data-original-title="" title="">
                                <i className="fa fa-cog"></i>
                            </a>
                        </div>
                    </div>
                </aside>
                <aside className="lg-side">
                <div className="inbox-head">
                    <h3>Inbox</h3>
                    <form className="pull-right position" action="#">
                        <div className="input-append">
                            <input type="text" placeholder="Search Mail" className="sr-input">
                            <button type="button" className="btn sr-btn" data-original-title="" title=""><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="inbox-body">
                <div className="mail-option">
                    <div className="chk-all">
                        <input type="checkbox" className="mail-checkbox mail-group-checkbox">
                        <div className="btn-group">
                            <a className="btn mini all" href="#" data-toggle="dropdown" data-original-title="" title="">
                                All
                                <i className="fa fa-angle-down "></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#"> None</a></li>
                                <li><a href="#"> Read</a></li>
                                <li><a href="#"> Unread</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-group">
                        <a className="btn mini tooltips" href="#" data-toggle="dropdown" data-placement="top" data-original-title="Refresh">
                            <i className=" fa fa-refresh"></i>
                        </a>
                    </div>
                    <div className="btn-group hidden-phone">
                        <a className="btn mini blue" href="#" data-toggle="dropdown" data-original-title="" title="">
                            More
                            <i className="fa fa-angle-down "></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                            <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <a className="btn mini blue" href="#" data-toggle="dropdown" data-original-title="" title="">
                            Move to
                            <i className="fa fa-angle-down "></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                            <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                    </div>
                    <ul className="unstyled inbox-pagination">
                        <li><span>1-50 of 234</span></li>
                        <li>
                            <a href="#" className="np-btn"><i className="fa fa-angle-left  pagination-left"></i></a>
                        </li>
                        <li>
                            <a href="#" className="np-btn"><i className="fa fa-angle-right pagination-right"></i></a>
                        </li>
                    </ul>
                </div>
                <table className="table table-inbox table-hover">
                <tbody>
                <tr className="unread">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message  dont-show">Sean O'Brien</td>
                    <td className="view-message ">oH LAWD he in xgames mode!</td>
                    <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message  text-right">9:27 AM</td>
                </tr>
                <tr className="unread">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Sarah Moe</td>
                    <td className="view-message">Washington Football Team? I thought they were playing badmitton :rolls eyes:</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">August 15</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Arthur Brenier Jr</td>
                    <td className="view-message">THEY PUSHED THE DANG CODE ITS NOT OUT YET</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">July 25</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Twitch</td>
                    <td className="view-message">Thank you for the Tier 3 Support! - CloudNando</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">July 01</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Facebook <span className="label label-danger pull-right">urgent</span></td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">May 23</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Twitter</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">January 19</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook <span className="label label-success pull-right">megazine</span></td>
                    <td className="view-message view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 04</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Twitter</td>
                    <td className="view-message view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">June 13</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook <span className="label label-info pull-right">family</span></td>
                    <td className="view-message view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 24</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Youtube</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 09</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="dont-show">Facebook</td>
                    <td className="view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">May 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Google</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">February 25</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="dont-show">Facebook</td>
                    <td className="view-message view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">amazon</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">April 07</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Twitter</td>
                    <td className="view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">July 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Amazon</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">April 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">June 16</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Amazon</td>
                    <td className="view-message">Lorem ipsum dolor sit amet</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">August 10</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox">
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message view-message">Dolor sit amet, consectetuer adipiscing</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">April 14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
