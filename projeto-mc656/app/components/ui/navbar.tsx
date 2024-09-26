import Button from "./button";

export default function Navbar() {
    return (
        <div className="display: flex navbar" style={
            { width: "100%", marginTop: '30px', justifyContent: "center" }
        }>
            <div style={{ display: "flex", width: "70%", justifyContent: "space-between" }}>
                <Button text="Página Inicial" fontSize="16px" dark outline="#ededed" boxShadow={false} />
                <Button text="Mapa" fontSize="16px" dark outline="#ededed" boxShadow={false} />
                <Button text="Sobre nós" fontSize="16px" dark outline="#ededed" boxShadow={false} />
                <Button text="Cadastre-se" fontSize="16px" boxShadow={false} />
                <Button text="Entre" fontSize="16px" outline="#18ACFE" dark boxShadow={false} />
            </div>
        </div>
    );
}