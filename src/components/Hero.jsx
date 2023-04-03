import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { RiArrowDownCircleLine, RiArrowDropDownLine } from "react-icons/ri";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section>
            <Navbar />
            <div className="container-section container-hero">
                <div className="hero-left">
                    <h1 className="hero-title">Pensar, Hacer y Resolver</h1>
                    <div className="hero-what">
                        <div className="hero-line"></div>
                        <h2 className="hero-subtitle">¿Que hacemos?</h2>
                    </div>
                    <p className="hero-description">
                        Disfrutamos creando experiencias digitales encantadoras
                        y centradas en el ser humano
                    </p>
                    <div className="hero-group-button">
                        <a href="#" className="hero-button">
                            Saber más
                            <RiArrowDropDownLine className="hero-arrow" />
                        </a>
                        <a href="#" className="hero-button download">
                            <RiArrowDownCircleLine />
                            Descargar CV
                        </a>
                    </div>
                </div>
                <div className="hero-right">
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1.5, 100, 200]} scale={1}>
                            <MeshDistortMaterial
                                color="#8C8E98"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <img src="./img/moon.png" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
