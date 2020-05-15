class UserController extends Controller {
    async index() {
      const { ctx } = this;
      ctx.body = {
        name: `hello ${ctx.params.id}`,
      };
    }
  }