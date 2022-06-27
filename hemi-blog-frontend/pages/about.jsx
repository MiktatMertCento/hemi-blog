import Head from 'next/head'
import React from 'react'
import aboutStyles from '../styles/about.module.css'

export default function about() {
    return (
        <>
            <Head>
                <title>Hakkında</title>
            </Head>

            <div className={aboutStyles.aboutTitle}>

            </div>
        </>
    )
}
