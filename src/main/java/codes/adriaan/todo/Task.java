package codes.adriaan.todo;

import io.vertx.core.json.JsonObject;

public class Task {

  private String title;

  public Task(JsonObject task) {
    this.title = task.getString("title");
  }

  public String GetTitle() {
    return this.title;
  }
}
