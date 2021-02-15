import imageOne from '../assets/img/01.jpg'
import imageTwo from '../assets/img/02.jpg'
import React, { useEffect, useState } from 'react'
import { httpClient } from "../utils/api"

export default function ListHeroes() {

    const [heroes, setHeroes] = useState([])

    /**
     * Get superheroes
     */
    const getListSuperheroes = async () => {
        try {
            const request = await httpClient('all')
            if (request) {
                if (request.status) {
                    setHeroes(request.data)
                } else {
                    const errorMessage = {
                        response: {
                            data: request
                        }
                    }
                    throw errorMessage
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Calling function getListSuperheroes
     */
    useEffect(() => {
        getListSuperheroes()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={imageOne} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">For those about to rock...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={imageTwo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">We salute you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}