import React, { useState } from "react";
import {Col, Container, Row} from "reactstrap";
// reactstrap components

import img1 from "assets/img/galeria/IMG_8933.jpeg";
import img2 from "assets/img/galeria/IMG_8934.jpeg";
import img3 from "assets/img/galeria/IMG_8935.jpeg";
import img4 from "assets/img/galeria/IMG_8937.jpeg";
import img5 from "assets/img/galeria/IMG_8938.jpeg";
import img6 from "assets/img/galeria/IMG_8939.jpeg";
import downloadIcon from "assets/img/download.png";
import uploadIcon from "assets/img/image-.png";

function Galeria() {
    const [images, setImages] = useState([
        img1, img2, img3, img4, img5, img6
    ]);

    const handleAddImages = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    {images.map((src, index) => (
                        <Col key={index} xs="6" sm="4" md="3" className="mb-4">
                            <div className="photo-box position-relative">
                                <img
                                    src={src}
                                    alt={`gallery-${index}`}
                                    className="img-fluid"
                                    style={{
                                        aspectRatio: "1 / 1",
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                />
                                <a
                                    href={src}
                                    download
                                    className="download-button"
                                    title="Download imagem"
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        background: "rgba(255, 255, 255, 0.8)",
                                        borderRadius: "50%",
                                        padding: "8px",
                                    }}
                                >
                                    <img
                                        src={downloadIcon}
                                        alt="Download"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <label
                htmlFor="upload-input"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#007bff",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
                title="Adicionar fotos"
            >
                <img
                    src={uploadIcon}
                    alt="Upload"
                    style={{ width: "30px", height: "30px" }}
                />
                <input
                    id="upload-input"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleAddImages}
                    style={{ display: "none" }}
                />
            </label>
        </div>
    );
}

export default Galeria;