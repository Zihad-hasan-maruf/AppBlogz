"use client"
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.css';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "https://i.ibb.co/XyqD41d/wix.jpg"
    },
    {
        color: "#d6d7dc",
        src: "https://i.ibb.co/JRyRtxV/silencio.png"
    },
    {
        color: "#e3e3e3",
        src: "https://i.ibb.co/6vpPRG7/decimal.jpg"
    },
    {
        color: "#21242b",
        src: "https://i.ibb.co/nzVcDMB/funny.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "https://i.ibb.co/tXszLsz/google.jpg"
    },
    {
        color: "#e5e0e1",
        src: "https://i.ibb.co/Ry7y4n5/locomotive.png"
    },
    {
        color: "#d7d4cf",
        src: "https://i.ibb.co/dkbvBtV/maven.jpg"
    },
    {
        color: "#e1dad6",
        src: "https://i.ibb.co/56hNhY9/officestudio.png"
    }
]

export default function Sliding() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <img
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <img
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}