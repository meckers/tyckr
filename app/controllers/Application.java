package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

    public static void index() {
        String url = params.get("url");
        String title = params.get("title");
        if (url != null && title != null) {
            renderTemplate("Application/page.html", url, title);
        }
        else {
            render();
        }
    }


}