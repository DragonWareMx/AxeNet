import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "./styles/loginStyle.css";
import Cuadro from "./assets/CuadroRegistro.png";
import XInicio from "./assets/XInicio.png";
import styled from "@emotion/styled";
import route from "ziggy-js";
import { Inertia } from "@inertiajs/inertia";

const LoginTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
});

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 18px",
    border: "1px solid",
    borderRadius: 10,
    lineHeight: 1.5,
    backgroundColor: "##3a3a3a",
    borderColor: "#3a3a3a",
    "&:hover": {
        backgroundColor: "#1a1a1a",
        borderColor: "1a1a1a",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#1a1a1a",
        borderColor: "#1a1a1a",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

const useStyles = {
    formulario: {
        padding: "0px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    textField: {
        minWidth: "250px",
        maxWidth: "100%",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "23px",
        borderColor: "#919EAB",
        borderRadius: "16px",
        marginBottom: "24px",
        color: "white !important",
        "&:not(.Mui-disabled):hover::before": {
            borderColor: "white",
        },
    },
    formTextLabel: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        lineHeight: "19.5px",
        color: "#919EAB",
    },
    helperText: {
        marginTop: "-12px",
        fontFamily: "Montserrat",
        fontSize: "14px",
    },
    closeButton: {
        position: "absolute",
        right: "12px",
        top: "12px",
        color: "gray",
    },
    input: {
        WebkitBoxShadow: "0 0 0 1000px red inset",
    },
};

const Login = () => {
    useEffect(() => {
        document.title = "AxeNet - Login";
    }, []);

    const [checked, setchecked] = useState(true);
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
        error: false,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleChangeRemember = (event) => {
        setValues((values) => ({
            ...values,
            remember: event.target.checked,
        }));
    };

    const ref = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(route("login"), values, {
            onError: () => {
                // Inertia.reload({ only: ['cursos'], data: { regime: values.regimen } })
                setValues((values) => ({
                    ...values,
                    error: false,
                }));
                setValues((values) => ({
                    ...values,
                    error: true,
                }));
            },
        });
    }

    return (
        <div className="fondo">
            <Container>
                <Grid container className="grid-login">
                    <Grid item xs={0} md={7}></Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Paper elevation={16} square className="login-paper">
                            <div>
                                <div className="header-login">
                                    <img
                                        src={XInicio}
                                        alt="img"
                                        height={"80px"}
                                    />
                                    <Button
                                        variant="text"
                                        href={route("register")}
                                        sx={{
                                            fontSize: "25px",
                                            padding: 0,
                                            height: "30px",
                                            color: "#FFFFFF",
                                            marginTop: 1,
                                            fontWeight: 600,
                                        }}
                                    >
                                        REGISTRO
                                    </Button>
                                </div>

                                <div className="container-inputs-login">
                                    <form
                                        onSubmit={handleSubmit}
                                        ref={ref}
                                        id="login-form"
                                    >
                                        <LoginTextField
                                            id="email"
                                            className={"i"}
                                            required
                                            label="CORREO ELECTRÓNICO"
                                            type="email"
                                            fullWidth={true}
                                            sx={{
                                                marginTop: 2,
                                                input: {
                                                    color: "white",
                                                },
                                                label: {
                                                    color: "white",
                                                },
                                            }}
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <LoginTextField
                                            id="password"
                                            className={"i"}
                                            required
                                            label="CONTRASEÑA"
                                            type="password"
                                            fullWidth={true}
                                            sx={{
                                                marginTop: 5,
                                                input: {
                                                    color: "white",
                                                },
                                                label: {
                                                    color: "white",
                                                },
                                            }}
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="login-buttons-container">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.remember}
                                            onChange={handleChangeRemember}
                                            inputProps={{
                                                "aria-label": "controlled",
                                            }}
                                            sx={{
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                            }}
                                        />
                                    }
                                    label="RECORDARME"
                                    sx={{
                                        color: "#3a3a3a",
                                        span: {
                                            fontSize: "14px",
                                            fontWeight: 600,
                                        },
                                    }}
                                />
                                <Button
                                    variant="text"
                                    LinkComponent={"a"}
                                    href={route("password.request")}
                                    sx={{
                                        color: "#3a3a3a",
                                        marginTop: 1,
                                        fontWeight: 600,
                                    }}
                                >
                                    RECUPERAR CONTRASEÑA
                                </Button>
                                <CustomButton
                                    variant="contained"
                                    sx={{
                                        marginTop: 1,
                                        backgroundColor: "#3a3a3a",
                                    }}
                                    type="submit"
                                    form="login-form"
                                >
                                    INICIAR SESIÓN
                                </CustomButton>
                            </div>
                            <div className="login-square">
                                <img
                                    src={Cuadro}
                                    alt="img"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;
