defmodule MicroServiceWeb.MessagesView do
  use MicroServiceWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
