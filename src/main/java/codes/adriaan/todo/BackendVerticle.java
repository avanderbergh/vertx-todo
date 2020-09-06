package codes.adriaan.todo;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;
import io.vertx.ext.web.Route;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;

public class BackendVerticle extends AbstractVerticle {

    private JsonArray tasks = new JsonArray();

    @Override
    public void start() throws Exception {
        // tag::backend[]
        Router router = Router.router(vertx);
        Route messageRoute = router.get("/api/message");
        messageRoute.handler(rc -> {
            rc.response().end("Helloooo! Wooorld!");
        });

        Route taskRoute = router.get("/api/task");
        taskRoute.handler(rc -> {
            // var client = MongoClient.createShared(vertx, config);
            rc.response().putHeader("content-type", "application/json").end(tasks.toString());
        });

        Route taskPostRoute = router.post("/api/task");
        taskPostRoute.handler(BodyHandler.create()).handler(rc -> {
            JsonObject task = rc.getBodyAsJson();
            tasks.add(task);
            rc.response().putHeader("content-type", "text/plain").end("Added: " + task.getString("title"));
        });

        router.get().handler(StaticHandler.create());

        vertx.createHttpServer().requestHandler(router).listen(8080);
        // end::backend[]
    }

    // tag::main[]
    public static void main(String[] args) {
        Vertx vertx = Vertx.vertx();
        vertx.deployVerticle(new BackendVerticle());
    }
    // end::main[]
}
