import React, { useState, useEffect } from "react";
interface test {
    switchId : string,
}
const NoticeComponent = ({switchId}: test) => {

    // checkbox 선택여부
    const [allCheck, setAllCheck] = useState(false)
    const [Check01, setCheck01] = useState(false)
    const [Check02, setCheck02] = useState(false)
    const [Check03, setCheck03] = useState(false)
    const [Check04, setCheck04] = useState(false)


    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true)
            setCheck01(true)
            setCheck02(true)
            setCheck03(true)
            setCheck04(true)
        } else {
            setAllCheck(false)
            setCheck01(false)
            setCheck02(false)
            setCheck03(false)
            setCheck04(false)
        }
    }

    const check01BtnEvent = () => {
        if (Check01 === false) {
            setCheck01(true)
        } else {
            setCheck01(false)
        }
    }

    const check02BtnEvent = () => {
        if (Check02 === false) {
            setCheck02(true)
        } else {
            setCheck02(false)
        }
    }


    const check03BtnEvent = () => {
        if (Check03 === false) {
            setCheck03(true)
        } else {
            setCheck03(false)
        }
    }


    const check04BtnEvent = () => {
        if (Check04 === false) {
            setCheck04(true)
        } else {
            setCheck04(false)
        }
    }

    useEffect(() => {
        if (Check01 === true && Check02 === true && Check03 === true && Check04 === true) {
            setAllCheck(true)
        } else {
            setAllCheck(false)
        }
    }, [Check01, Check02, Check03, Check04])

    return (
        <>
            {/* <!-- Wrap-Tbl : Start --> */}
            <div className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-tit">
                        <h2 className="fz-20 fc-1 fw-bold">알림설정</h2>
                    </div>
                </div>
                <div className="box-header">
                    <div className="box-tit">
                        <h2 className="fz-18 fc-1">알림 수신동의</h2>
                    </div>
                    <div className="box-option">
                        {/* <!-- Comp-Switch : Start --> */}
                        <div className="comp-switch">
                            <input type="checkbox" id={switchId} checked={allCheck} onChange={allBtnEvent} />
                            <label htmlFor={switchId}>
                                <i className="ico"></i>
                            </label>
                        </div>
                        {/* <!-- Comp-Switch : End --> */}
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl className="vertical">
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-16 fc-1">
                                        충전사업자번호
                                    </span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    {/* <!-- Comp-Checkbox : Start --> */}
                                    <div className="comp-checkbox block">
                                        <input type="checkbox" id="inp-check-01" name="checkWrap" checked={Check01} onChange={check01BtnEvent} />
                                        <label htmlFor="inp-check-01">캠페인 알림 수신</label>
                                    </div>
                                    {/* <!-- Comp-Checkbox : End --> */}
                                    {/* <!-- Comp-Checkbox : Start --> */}
                                    <div className="comp-checkbox block">
                                        <input type="checkbox" id="inp-check-02" name="checkWrap" checked={Check02} onChange={check02BtnEvent} />
                                        <label htmlFor="inp-check-02">프로모션 알림 수신</label>
                                    </div>
                                    {/* <!-- Comp-Checkbox : End --> */}
                                    {/* <!-- Comp-Checkbox : Start --> */}
                                    <div className="comp-checkbox block">
                                        <input type="checkbox" id="inp-check-03" name="checkWrap" checked={Check03} onChange={check03BtnEvent} />
                                        <label htmlFor="inp-check-03">비즈머니 충전 알림 수신</label>
                                    </div>
                                    {/* <!-- Comp-Checkbox : End --> */}
                                    {/* <!-- Comp-Checkbox : Start --> */}
                                    <div className="comp-checkbox block">
                                        <input type="checkbox" id="inp-check-04" name=" checkWrap" checked={Check04} onChange={check04BtnEvent} />
                                        <label htmlFor="inp-check-04">야간 알림 수신 (21시 ~ 익일 8시)</label>
                                    </div>
                                    {/* <!-- Comp-Checkbox : End --> */}
                                </div>
                                <div className="form-group">
                                    {/* <!-- Comp-Txt : Start --> */}
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-12 fc-3 lh20"><i className="fz-12 fc-5">*</i>의무적으로 안내되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공합니다.</b>
                                            </span>
                                        </span>
                                    </span>
                                    {/* <!-- Comp-Txt : End --> */}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {/* <!-- Wrap-Tbl : End --> */}

        </>
    )
}
export default NoticeComponent