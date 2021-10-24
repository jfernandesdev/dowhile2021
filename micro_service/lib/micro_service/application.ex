defmodule MicroService.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      MicroService.Repo,
      # Start the Telemetry supervisor
      MicroServiceWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: MicroService.PubSub},
      # Start the Endpoint (http/https)
      MicroServiceWeb.Endpoint,
      # Start a worker by calling: MicroService.Worker.start_link(arg)
      # {MicroService.Worker, arg}
      MicroService.Scheduler
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MicroService.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    MicroServiceWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
