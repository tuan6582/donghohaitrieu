import React, { useEffect, useState } from 'react';
import './ReviewBanner.css'

let timeCounter;

let timePrize;

let timeSatisfied;

let timeBranch;

function ReviewBanner() {


    const [counter, setCounter] = useState(0)
    const [prize, setPrize] = useState(0)
    const [satisfied, setSatisfied] = useState(0)
    const [branch, setBranch] = useState(0)


    const CounterProduct = () => {

        useEffect(() => {
            timeCounter = setInterval(() => {
                setCounter(prevCount => prevCount + 1)
            })

        }, [])

        const StopCounter = () => {
            clearInterval(timeCounter)
        }

        if (counter >= 1280) {
            StopCounter()
        }
    }
    CounterProduct()

    const CounterPrize = () => {
        useEffect(() => {
            timePrize = setInterval(() => {
                setPrize(prevPrize => prevPrize + 1)
            }, 500)
        }, [])

        const StopPrize = () => {
            clearInterval(timePrize)
        }
        if (prize >= 8) {
            StopPrize()
        }
    }
    CounterPrize()

    const CounterSatisfied = () => {
        useEffect(() => {
            timeSatisfied = setInterval(() => {
                setSatisfied(prevSatisfied => prevSatisfied + 3)
            })
        }, [])
        const StopSatisfied = () => {
            clearInterval(timeSatisfied)
        }
        if (satisfied >= 3895) {
            StopSatisfied()
        }
    }
    CounterSatisfied()

    const CounterBranch = () => {
        useEffect(() => {
            timeBranch = setInterval(() => {
                setBranch(prevBranch => prevBranch + 1)
            }, 200)
        }, [])
        const StopBranch = () => {
            clearInterval(timeBranch)
        }
        if (branch >= 25) {
            StopBranch()
        }
    }
    CounterBranch()


    return (
        <div className="review-banner-app">
            <div className="review-banner">
                <div className="box-review-banner" data-aos="zoom-in">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="box-counter">
                                    <h2 className="counter-title">{counter}</h2>
                                    <p>SẢN PHẨM</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="box-counter">
                                    <h2 className="counter-title">{prize}</h2>
                                    <p>GIẢI THƯỞNG</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="box-counter">
                                    <h2 className="counter-title">{satisfied}</h2>
                                    <p>KHÁCH HÀNG HÀI LÒNG</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="box-counter">
                                    <h2 className="counter-title">{branch}</h2>
                                    <p>CHI NHÁNH CỬA HÀNG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__overlay"></div>
        </div>
    );
}

export default ReviewBanner;