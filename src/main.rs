use rshtml::RsHtml;
use rshtml::traits::RsHtml;
use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use actix_files::Files;


#[derive(RsHtml)]
struct HomePage {}

#[derive(RsHtml)]
struct Imprint {}


#[get("/")]
async fn home() -> impl Responder {
    let mut homepage = HomePage {};

    let result = homepage.render().unwrap();
    HttpResponse::Ok().body(result)
}

#[get("/imprint")]
async fn imprint() -> impl Responder {
    let mut imprint = Imprint {};
    let result = imprint.render().unwrap();
    HttpResponse::Ok().body(result)
}


#[actix_web::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    HttpServer::new(|| {
        App::new()
            .service(home)
            .service(Files::new("/cdn", "./src/pages/cdn").show_files_listing())
            .service(imprint)
    })
        .bind(("127.0.0.1", 8080))?
        .run()
        .await?;
    Ok(())
}