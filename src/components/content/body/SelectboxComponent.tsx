import { Tooltip as ReactTooltip } from 'react-tooltip'

const SelectBoxComponent = () => {
    return (
        <>
            <div className="wrap-section wrap-tbl">
                <div className="box-body">
                    <div className="tbl">
                        <dl className="colum-two">
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-16 fc-1">
                                        충전사업자번호
                                    </span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    {/* <!-- Select2 : Start --> */}
                                    <select className="select2-single w-300 select2-hidden-accessible" tabIndex={-1} aria-hidden="true">
                                        <option></option>
                                        <option>옵션1</option>
                                        <option>옵션2</option>
                                        <option>옵션3</option>
                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '300px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-wauo-container"><span className="select2-selection__rendered" id="select2-wauo-container"><span className="select2-selection__placeholder">셀렉트2 싱글</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    {/* <!-- Select2 : End --> */}
                                    {/* <!-- Select2 : Start --> */}
                                    {/* <select className="select2-single w-300 select2-hidden-accessible" disabled="" tabIndex={-1} aria-hidden="true"> */}
                                    <select className="select2-single w-300 select2-hidden-accessible" disabled={null || undefined} tabIndex={-1} aria-hidden="true">
                                        <option></option>
                                        <option>옵션1</option>
                                        <option>옵션2</option>
                                        <option>옵션3</option>
                                    </select><span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" style={{width: '300px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-labelledby="select2-vuv8-container"><span className="select2-selection__rendered" id="select2-vuv8-container"><span className="select2-selection__placeholder">셀렉트2 싱글</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    {/* <!-- Select2 : End --> */}
                                    <button type="button" className="btn btn-primary">저장</button>
                                </div>
                                <div className="form-group">
                                    {/* <!-- Comp-Txt : Start --> */}
                                    <p className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-12 fc-3 lh20"><i className="fz-12 fc-5">*</i>선택한 사업자번호를 기준으로 비즈머니가 관리됩니다.</b>
                                                <b className="fz-12 fc-3 lh20"><i className="fz-12 fc-5">*</i>사업자번호 변경조건<a className="ico-tooltip tooltip-f" title=""></a></b>
                                            </span>
                                        </span>
                                    </p>
                                    {/* <!-- Comp-Txt : End --> */}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectBoxComponent
