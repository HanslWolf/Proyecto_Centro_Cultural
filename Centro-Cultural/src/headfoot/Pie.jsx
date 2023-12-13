import "./Pie.css";
function Pie(){
    return(
        
            <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="https://www.umsa.bo/">
                        <img src="/imagenes/icono umsa.png" alt="Logo de SLee Dw" class="logoumsa"/>
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b>Hancel Limber Condori Condori</b> - Todos los Derechos Reservados.</small>
        </div>
        </footer>
        

    );
}
export default Pie;