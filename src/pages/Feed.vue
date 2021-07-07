<template>
  <SideNavLayout :navActiveInfo="3">
    <NavLayout :navInfo="navInfo">
      <main class="">
        <div class="container h-full w-full pt-12 mt-12 md:mt-0">
          <div class="w-full block md:flex px-12">
            <div class="w-full lg:w-9/12">
              <h1 class="decor text-layout-b2 mt-0">Feed</h1>

              <p class="kicker">
                Random feed from the things I usually do in my spare time.
              </p>

              <div class="mt-8">
                <tabs
                  :tabs="tabs"
                  :currentTab="currentTab"
                  :wrapper-class="'default-tabs'"
                  :tab-class="'default-tabs__item'"
                  :tab-active-class="'default-tabs__item_active'"
                  :line-class="'default-tabs__active-line'"
                  @onClick="handleClick"
                />
                <div class="tab-content">
                  <div v-if="currentTab === '1'">
                    <h4 class="font-glegoo-bold">
                      Repos with most recent updates
                    </h4>
                    <div
                      v-if="repos.length == 0"
                      class="flex justify-center w-full h-full bg-transparnt"
                    >
                      <clip-loader
                        class="self-center"
                        :loading="true"
                        :color="$static.metadata.brandColors.brand"
                        :size="'80px'"
                      ></clip-loader>
                    </div>
                    <div class="github-repo lg:flex lg:flex-wrap lg:-mx-1">
                      <RepoCard
                        class="mt-4"
                        v-for="repo in repos"
                        :key="repo.node.id"
                        :name="repo.node.name"
                        :html_url="repo.node.url"
                        :language="
                          repo.node.primaryLanguage
                            ? repo.node.primaryLanguage.name
                            : '--'
                        "
                        :languageColor="
                          repo.node.primaryLanguage
                            ? repo.node.primaryLanguage.color
                            : 'gainsboro'
                        "
                        :refs="repo.node.refs.edges"
                        @click.native="selectRepo(repo)"
                      >
                      </RepoCard>
                    </div>
                  </div>
                  <div v-if="currentTab === '2' || currentTab === '3'">
                    <h4 class="font-glegoo-bold">
                      {{ currentTab === '2' ? 'UI Design' : 'Travel' }}
                    </h4>
                    <figure class="w-full my-8">
                      <svg
                        class="mx-auto w-1/4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 421.333 290.438"
                      >
                        <g transform="translate(.003)">
                          <path
                            d="M130.092 14.674C144.386 1.798 166.827-.826 187.251.201c64.153 3.22 122.064 34.493 172.156 69.867 18.134 12.807 35.988 26.62 47.769 44.243 23.965 35.9 16.854 85.635-16.464 115.208-11.337 10.064-25.081 17.777-39.189 24.618-25.084 12.158-52.145 21.916-80.621 24.694-20.3 1.98-40.841.365-61.043-2.392-56.394-7.723-111.748-24.8-158.146-54.02-20.359-12.814-39.539-28.746-47.926-49.487s-3.019-47 17.759-59.271c8.595-5.076 18.867-7.366 28.928-9.521 14.809-3.165 29.85-6.29 43.215-12.73 13.8-6.651 30.142-19.516 27.411-34.241-2.933-15.784-5.285-29.659 8.992-42.495z"
                            fill="#11a89d"
                            opacity=".1"
                          />
                          <path
                            d="M93.604 163.296s3.781-2.709 7.694-1.036c0 0-1.094 2.326-5.969 2.3zM93.134 163.452s-1.01 4.54 2.068 7.486c0 0 1.707-1.922-.233-6.392zM88.135 159.32s.139-3.832 8.817-2.9a4.123 4.123 0 01-2.848 3.749c-2.982 1.288-4.412.365-5.969-.849zM87.598 159.313s-3.606 1.313-.04 9.284a4.123 4.123 0 002.687-3.865c.304-3.235-1.017-4.303-2.647-5.419zM82.505 154.081s-.729-6.272 8.11-5.966c0 0 .842 5.67-6.494 7.417zM76.404 147.203s.937-7.173 9.846-5.39c0 0 .27 6.163-8.329 7.034zM71.864 140.023s1.758-7.034 10.575-5.277c0 0-1.823 6.327-9.944 6.538zM67.543 133.011s1.7-7.293 10.21-5.441c0 0-2.553 6.954-9.616 6.648zM64.673 126.301s1.185-8.872 9.116-7.224c0 0-1.976 8.106-8.5 8.482zM61.912 118.166s1.484-8.952 9.536-6.673c0 0-2.8 8.515-8.934 7.88zM60.104 110.578s2.553-8.992 8.723-8.989c0 0-2.607 9.481-8.139 10.75zM58.857 103.131s2.746-10.816 7.785-10.181c0 0-1.871 8.256-7.545 11.84zM57.971 94.226s2.615-9.022 7.545-9.568c0 0-1.677 8.843-7.348 11.88zM57.052 85.942s3.348-9.062 6.607-9.39c0 0-1.265 8.843-6.225 10.841zM56.348 78.219s1.9-9.776 5.127-10.7c0 0-.142 7.938-4.773 11.414zM54.732 68.139s2.089-7.811 4.686-9.091c0 0-.175 9.116-4.011 10.94zM53.456 61.524l-1-13.594s5.324 10.086 1.459 15.983zM49.117 48.142s-3.935-9.806-4.81-10.327c0 0 7.22 6.2 6.855 14.506zM82.264 154.044s-6.29-.58-5.762 8.252c0 0 5.689.7 7.253-6.677zM76.101 146.977s-7.227.252-6.294 9.277c0 0 6.108.853 7.789-7.625zM71.816 140.614s-6.68-2.826-10.575 5.277c0 0 6.159 2.33 11.2-4.011zM67.397 133.083s-6.841-3.019-10.491 4.894c0 0 7.092 2.141 11.093-3.69zM64.764 126.488s-6.7-5.929-11.621.518c0 0 6.8 4.828 11.972.846z"
                            fill="#11a89d"
                          />
                          <path
                            d="M62.27 117.94s-6.746-6.068-11.614.729c0 0 7.5 4.9 11.9.58zM60.76 110.289s-5.313-7.694-11.147-5.71c0 0 5.521 8.154 11.162 7.567zM59.006 103.076s-5.437-9.744-10.141-7.836c0 0 3.931 7.5 10.331 9.5zM58.299 93.705s-5.492-7.621-10.316-6.48c0 0 4.547 7.767 10.907 8.726zM57.595 85.745s-4.358-8.62-7.632-8.573c0 0 2.264 8.642 7.417 10.057zM56.501 78.021s-4.813-8.715-8.176-8.606c0 0 2.582 7.512 8.055 9.393zM55.469 68.642s-3.628-7.227-6.429-7.953c0 0 2.017 8.9 6.133 9.919z"
                            fill="#11a89d"
                          />
                          <path
                            d="M53.048 61.284l-7.909-11.1s2.345 11.166 9.083 13.23zM47.443 49.122s-8.9-5.663-9.266-6.622c0 0 4.74 8.234 13 9.4zM46.82 46.446s-10.342-9.207-12.887-9.1a16.331 16.331 0 0113.128 8.58z"
                            fill="#11a89d"
                          />
                          <path
                            d="M55.425 70.101l-.365.062c-2.436-14.6-5.5-23.17-8.631-24.125l.106-.365c3.311 1.006 6.396 9.448 8.89 24.428z"
                            fill="#444053"
                          />
                          <path
                            d="M59.527 105.064l-.547.066a100.936 100.936 0 01-.427-4.157c-.988-12.125-2.228-23.247-3.614-31.568l.3-.4c1.389 8.336 2.87 19.786 3.862 31.929.116 1.381.259 2.77.426 4.13z"
                            fill="#444053"
                          />
                          <path
                            d="M104.117 169.888c-.1-.04-9.93-3.986-20.359-13.9a79.728 79.728 0 01-15.257-19.947c-5-9.266-8.27-20.767-9.652-32.006l.583.248c3.1 25.227 15.286 42.088 24.8 51.15 10.327 9.824 20.056 13.729 20.147 13.766z"
                            fill="#444053"
                          />
                          <g opacity=".7">
                            <path
                              d="M108.862 140.191s4.416-1.459 7.658 1.3c0 0-1.739 1.9-6.385.416zM108.366 140.198s-2.312 4.037-.252 7.76c0 0 2.188-1.324 1.681-6.17zM104.818 134.769s1.276-3.617 9.28-.142a4.115 4.115 0 01-3.836 2.731c-3.234.335-4.314-.974-5.444-2.589zM104.311 134.605s-3.829.182-2.8 8.85a4.122 4.122 0 003.719-2.892c1.251-3.001.306-4.412-.919-5.958zM101.007 128.081s1.163-6.2 9.514-3.282c0 0-.879 5.663-8.405 5.149zM97.23 119.694s3.027-6.564 10.991-2.217c0 0-1.575 5.962-10.046 4.237zM95.027 111.507s3.774-6.2 11.669-1.893c0 0-3.647 5.492-11.439 3.282zM92.989 103.525s3.792-6.447 11.374-2.155c0 0-4.5 5.878-11.155 3.486zM92.245 96.265s3.771-8.117 10.859-4.179c0 0-4.3 7.147-10.633 5.568zM92.033 87.677s4.08-8.106 11.085-3.534c0 0-5.2 7.293-10.87 4.864zM92.569 79.885s5.105-7.825 11-5.988c0 0-5.313 8.289-10.969 7.844zM93.605 72.413s5.834-9.507 10.462-7.4c0 0-4.245 7.326-10.724 9.058zM95.388 63.65s5.185-7.836 10.05-6.892c0 0-4.23 7.946-10.546 9.156zM96.981 55.461s5.889-7.658 9.1-6.994c0 0-3.84 8.066-9.167 8.493zM98.604 47.883s4.719-8.752 8.081-8.693c0 0-2.5 7.537-7.953 9.481zM100.059 37.778s4.321-6.834 7.18-7.293c0 0-2.881 8.657-7.082 9.266zM100.81 31.084l3.089-13.281s2.082 11.213-3.366 15.68zM100.658 17.019s-.842-10.531-1.521-11.3c0 0 5.054 8.052 2.232 15.892zM100.785 127.983s-5.834-2.421-7.953 6.17c0 0 5.218 2.363 8.908-4.219zM97.004 119.402s-6.976-1.907-8.77 6.987c0 0 5.579 2.633 9.707-4.963zM94.808 112.054s-5.535-4.686-11.669 1.893c0 0 5.185 4.059 11.891-.5zM92.832 103.551s-5.638-4.916-11.472 1.55c0 0 6.133 4.157 11.687-.219z"
                              fill="#11a89d"
                            />
                            <path
                              d="M92.281 96.473s-4.638-7.658-11.253-2.968c0 0 5.058 6.637 11.18 4.376zM92.441 87.568s-4.638-7.8-11.3-2.753c0 0 5.7 6.928 11.184 4.1zM93.273 79.812s-2.782-8.923-8.941-8.752c0 0 2.844 9.43 8.405 10.546zM93.744 72.405s-2.29-10.921-7.348-10.5c0 0 1.524 8.329 7.038 12.147zM95.859 63.25s-2.976-8.912-7.924-9.259c0 0 2.031 8.77 7.818 11.578zM97.558 55.439s-1.6-9.525-4.741-10.455c0 0-.4 8.923 4.091 11.811zM98.809 47.741s-2-9.754-5.244-10.648c0 0 .23 7.938 4.9 11.363zM100.61 38.494s-1.313-7.979-3.771-9.507c0 0-.729 9.094 2.917 11.3z"
                              fill="#11a89d"
                            />
                            <path
                              d="M100.493 30.718l-4.252-12.952s-1.094 11.355 4.741 15.334zM98.761 17.457s-6.83-8.062-6.881-9.08c0 0 2.089 9.273 9.616 12.843zM98.962 14.722s-7.136-11.869-9.6-12.526a16.308 16.308 0 019.962 12.092z"
                              fill="#11a89d"
                            />
                            <path
                              d="M100.143 39.835l-.365-.051c2.017-14.663 1.641-23.757-1.065-25.6l.208-.3c2.871 1.957 3.29 10.931 1.222 25.951z"
                              fill="#444053"
                            />
                            <path
                              d="M93.652 74.477l-.543-.1c.248-1.353.525-2.731.831-4.1 2.666-11.869 4.792-22.853 5.94-31.211l.412-.3c-1.152 8.387-3.147 19.746-5.813 31.634a84.75 84.75 0 00-.827 4.077z"
                              fill="#444053"
                            />
                            <path
                              d="M116.943 149.613c-.08-.066-8.292-6.757-15.315-19.327A79.666 79.666 0 0193 106.704c-2.017-10.334-1.721-22.288.306-33.428l.481.408c-4.54 25.008 2.079 44.736 8.475 56.219 6.928 12.449 15.053 19.071 15.137 19.137z"
                              fill="#444053"
                            />
                          </g>
                          <path
                            d="M369.886 274.988s-15.418-.93-13.6 9.875a2.628 2.628 0 001.367 2.775s.029-.8 1.583-.529a7.054 7.054 0 001.674.08 3.508 3.508 0 002.049-.846s4.332-1.79 6.017-8.872c0 0 1.247-1.546 1.2-1.944l-2.6 1.094a4.659 4.659 0 01.19 3.435s-.084-3.366-.583-3.282c-.1.018-1.353.653-1.353.653s1.531 3.282.365 5.645c0 0 .438-4.029-.853-5.411l-1.823 1.072s1.787 3.377.576 6.13c0 0 .31-4.226-.963-5.871l-1.659 1.295s1.681 3.329.656 5.612c0 0-.135-4.919-1.014-5.291a9.549 9.549 0 00-1.674 1.823s1.149 2.414.438 3.69c0 0-.438-3.282-.8-3.282a10.648 10.648 0 00-1.6 3.647 7.877 7.877 0 011.247-3.865 4.336 4.336 0 00-2.213 1.145s.226-1.535 2.553-1.67a10.12 10.12 0 011.517-1.747 9.54 9.54 0 00-3.752.434s1.247-1.459 4.179-.791l1.637-1.338s-3.074-.419-4.376.044c0 0 1.5-1.28 4.817-.346l1.783-1.065a16.237 16.237 0 00-4.179-.365s1.648-.89 4.7.073l1.276-.573s-1.922-.365-2.483-.438-.591-.215-.591-.215a6.644 6.644 0 013.6.4 16.323 16.323 0 002.692-1.181z"
                            fill="#11a89d"
                          />
                          <ellipse
                            cx="10.91"
                            cy="1.845"
                            rx="10.91"
                            ry="1.845"
                            transform="translate(348.354 286.734)"
                            fill="#11a89d"
                            opacity=".1"
                          />
                          <path
                            d="M399.457 246.521s-8.69-.521-7.658 5.568a1.484 1.484 0 00.77 1.564s.018-.452.893-.3a3.877 3.877 0 00.944.047 1.951 1.951 0 001.152-.478s2.443-1.01 3.395-5c0 0 .7-.871.675-1.094l-1.458.627a2.633 2.633 0 01.106 1.936s-.047-1.9-.328-1.852c-.058 0-.762.365-.762.365a4.347 4.347 0 01.211 3.183s.248-2.272-.481-3.048l-1.032.6a4.564 4.564 0 01.324 3.457s.175-2.381-.543-3.311l-.934.729s.944 1.878.365 3.165c0 0-.077-2.771-.572-2.983a5.826 5.826 0 00-.944 1.017s.649 1.364.248 2.082c0 0-.248-1.849-.448-1.856a6.124 6.124 0 00-.9 2.064 4.455 4.455 0 01.7-2.188 2.458 2.458 0 00-1.251.645s.128-.864 1.459-.941a5.676 5.676 0 01.853-.985 5.373 5.373 0 00-2.115.244 2.381 2.381 0 012.356-.449l.926-.751a7.623 7.623 0 00-2.469.026 2.977 2.977 0 012.717-.2l1.006-.6a9.2 9.2 0 00-2.359-.2 3.616 3.616 0 012.651.044l.729-.325s-1.094-.212-1.4-.244-.335-.124-.335-.124a3.763 3.763 0 012.035.226 8.666 8.666 0 001.474-.66z"
                            fill="#11a89d"
                          />
                          <ellipse
                            cx="6.152"
                            cy="1.039"
                            rx="6.152"
                            ry="1.039"
                            transform="translate(387.321 253.146)"
                            fill="#11a89d"
                            opacity=".1"
                          />
                          <path
                            d="M348.153 251.808s-10.495-.634-9.255 6.721a1.79 1.79 0 00.93 1.889s0-.543 1.076-.365a5 5 0 001.141.058 2.4 2.4 0 001.393-.576s2.95-1.218 4.1-6.042c0 0 .85-1.05.813-1.32l-1.769.755a3.176 3.176 0 01.128 2.341s-.055-2.294-.4-2.239c-.069 0-.919.441-.919.441s1.039 2.228.255 3.843c0 0 .3-2.742-.58-3.683l-1.247.729s1.214 2.3.39 4.175c0 0 .211-2.877-.653-4.011l-1.13.879s1.145 2.265.449 3.822c0 0-.091-3.348-.693-3.6a6.864 6.864 0 00-1.138 1.229s.78 1.645.3 2.512c0 0-.3-2.228-.54-2.239a7.51 7.51 0 00-1.094 2.491 5.385 5.385 0 01.85-2.633 2.965 2.965 0 00-1.506.78s.153-1.047 1.75-1.138a6.862 6.862 0 011.032-1.189 6.493 6.493 0 00-2.553.3 2.857 2.857 0 012.841-.54l1.116-.908a9.172 9.172 0 00-2.979.029s1.021-.872 3.282-.237l1.214-.729a10.979 10.979 0 00-2.848-.248 4.383 4.383 0 013.2.051l.872-.357s-1.305-.255-1.688-.3-.4-.146-.4-.146a4.533 4.533 0 012.454.274 10.975 10.975 0 001.806-.819z"
                            fill="#11a89d"
                          />
                          <ellipse
                            cx="7.428"
                            cy="1.254"
                            rx="7.428"
                            ry="1.254"
                            transform="translate(333.499 259.804)"
                            fill="#11a89d"
                            opacity=".1"
                          />
                          <path
                            d="M260.385 255.622l-36.576 14.152-53.465 20.665c-2.017-3.745-4.992-8.868-8.675-14.951-12.66-20.986-33.616-53.626-52.26-82.306-21.019-32.319-39.105-59.61-39.105-59.61l13.095-3.8 106.96-31.021z"
                            opacity=".1"
                          />
                          <path
                            d="M261.115 253.069l-36.576 14.152-53.465 20.665c-2.017-3.745-4.992-8.868-8.675-14.951-12.66-20.986-33.616-53.626-52.26-82.306-21.019-32.319-39.105-59.61-39.105-59.61l13.095-3.8 106.96-31.021z"
                            fill="#fff"
                          />
                          <path
                            d="M261.114 253.069l-36.578 14.152a275.094 275.094 0 01-62.14 5.714c-12.661-20.986-33.614-53.626-52.262-82.306L84.123 127.22l106.96-31.021z"
                            opacity=".1"
                          />
                          <path
                            d="M288.329 244.266s-56.828 33.614-141.668 26.029L79.018 105.403l32.414-5.568 112.05-19.243 63.577 160.487z"
                            fill="#11a89d"
                          />
                          <path
                            d="M287.06 241.079a269.033 269.033 0 01-44.436-1.257c-16.854-1.976-33.789-6.068-48.338-13.558-12.15-6.261-22.539-13.062-31.6-21.226-23.56-21.194-38.143-51.511-51.237-105.2l112.048-19.246z"
                            opacity=".1"
                          />
                          <path
                            d="M328.744 231.861s-41.906 8.212-84.519 3.154c-16.854-1.987-33.807-6.068-48.338-13.558-12.15-6.261-22.539-13.062-31.6-21.226-29.172-26.255-44.564-66.447-60.441-147.652 0 0 69.649 16.807 138.462-20.008-.002 0 23.208 144.866 86.436 199.29z"
                            fill="#fff"
                          />
                          <path
                            d="M244.224 235.016c-16.854-1.987-33.807-6.068-48.338-13.558-12.15-6.261-22.539-13.062-31.6-21.226 24.829-2.017 28.4-15.593 28.4-15.593 18.406 29.216 51.538 50.377 51.538 50.377z"
                            opacity=".1"
                          />
                          <path
                            d="M139.861 82.394s37.413 4.27 72.431-15.407l2.4 7.705s-33.5 16.7-74.83 16.7z"
                            fill="#11a89d"
                            opacity=".3"
                          />
                          <path
                            d="M139.861 120.42s37.195-3 78.6-23.013l1.4 3.2s-15.239 19.177-80 24.187zM144.269 135.258s37.195-3 78.6-23.01l1.4 3.2s-15.235 19.2-80 24.209zM148.302 151.248s37.195-3 78.6-23.01l1.4 3.2s-15.257 19.184-80 24.209zM153.09 164.951s37.195-3 78.6-23.01l1.4 3.2s-15.235 19.188-80 24.213z"
                            opacity=".3"
                          />
                          <path
                            d="M157.502 179.8s37.195-3 78.6-23.01l1.4 3.2s-15.239 19.188-80 24.209z"
                            opacity=".1"
                          />
                          <path
                            fill="#11a89d"
                            opacity=".3"
                            d="M224.606 90.966l10.407-3.543 3.543 10.407-10.407 3.543zM230.527 106.45l10.407-3.543 3.543 10.407-10.407 3.543zM240.019 136.242l10.407-3.543 3.543 10.407-10.407 3.543zM245.465 152.232l10.407-3.543 3.543 10.407-10.407 3.543zM235.355 122.535l10.407-3.543 3.543 10.407-10.407 3.543z"
                          />
                          <path
                            d="M257.122 151.542l29.172-10.9a2.771 2.771 0 013.57 1.626 2.775 2.775 0 01-1.63 3.57l-29.172 10.9-6.25-.627z"
                            fill="#5c5c8e"
                          />
                          <path
                            d="M288.978 141.398a2.779 2.779 0 01-1.63 3.574l-29.172 10.9-4.7-.47-.675.729 6.25.627 29.173-10.904a2.775 2.775 0 001.63-3.57 2.764 2.764 0 00-1.134-1.386 3.025 3.025 0 01.255.5z"
                            fill="#fff"
                            opacity=".1"
                          />
                          <path
                            d="M257.122 151.543l1.944 5.2-5.131-.514-1.123-.113 1.535-1.626z"
                            fill="#efc8c4"
                          />
                          <path
                            d="M254.343 154.489a1.113 1.113 0 01.3.328.471.471 0 010 .507 1.142 1.142 0 01-.284.2.93.93 0 00-.416.7l-1.123-.113z"
                            fill="#727a9c"
                          />
                          <path
                            d="M231.659 95.2l-4.919-2.4a.594.594 0 01-.273-.795l.521-1.072a.591.591 0 01.795-.273l3.315 1.615 3.461-7.1a.6.6 0 01.795-.277l1.072.525a.591.591 0 01.273.795l-4.245 8.7a.594.594 0 01-.795.282zM242.404 125.893l-4.919-2.4a.594.594 0 01-.273-.795l.521-1.072a.6.6 0 01.8-.273l3.311 1.615 3.457-7.1a.6.6 0 01.795-.277l1.068.525a.594.594 0 01.277.795l-4.245 8.7a.6.6 0 01-.8.273zM237.58 110.764l-4.919-2.4a.6.6 0 01-.277-.795l.525-1.072a.591.591 0 01.795-.273l3.315 1.615 3.461-7.107a.594.594 0 01.795-.273l1.072.521a.6.6 0 01.273.8l-4.248 8.712a.594.594 0 01-.795.273zM247.072 139.75l-4.919-2.4a.594.594 0 01-.273-.795l.521-1.072a.594.594 0 01.795-.273l3.315 1.615 3.461-7.1a.6.6 0 01.8-.277l1.068.525a.591.591 0 01.273.795l-4.241 8.7a.6.6 0 01-.8.282zM63.164 233.961s2.17 2.837-1 7.118-5.787 7.9-4.74 10.575c0 0 4.784-7.953 8.675-8.062s1.346-4.847-2.935-9.631z"
                            fill="#3acc6c"
                          />
                          <path
                            d="M63.163 233.961a3.5 3.5 0 01.445.89c3.8 4.463 5.834 8.628 2.17 8.752-3.4.095-7.483 6.177-8.456 7.712a2.8 2.8 0 00.113.365s4.784-7.953 8.675-8.062 1.334-4.873-2.947-9.657z"
                            opacity=".1"
                          />
                          <path
                            d="M67.197 237.579c0 1-.113 1.823-.252 1.823s-.248-.81-.248-1.823.139-.529.277-.529.223-.47.223.529z"
                            fill="#ffd037"
                          />
                          <path
                            d="M68.579 238.768c-.875.478-1.641.769-1.707.646s.591-.605 1.459-1.094.529-.131.594 0 .533-.03-.346.448z"
                            fill="#ffd037"
                          />
                          <path
                            d="M51.706 233.961s-2.166 2.837 1 7.118 5.783 7.9 4.74 10.575c0 0-4.781-7.953-8.675-8.062s-1.346-4.847 2.935-9.631z"
                            fill="#3acc6c"
                          />
                          <path
                            d="M51.705 233.961a3.577 3.577 0 00-.441.89c-3.8 4.463-5.834 8.628-2.17 8.752 3.4.095 7.479 6.177 8.456 7.712a2.819 2.819 0 01-.117.365s-4.781-7.986-8.682-8.1-1.327-4.835 2.954-9.619z"
                            opacity=".1"
                          />
                          <path
                            d="M47.676 237.579c0 1 .109 1.823.248 1.823s.252-.81.252-1.823-.139-.529-.277-.529-.223-.47-.223.529z"
                            fill="#ffd037"
                          />
                          <path
                            d="M46.29 238.768c.879.478 1.641.769 1.707.646s-.591-.605-1.459-1.094-.532-.131-.6 0-.523-.03.352.448z"
                            fill="#ffd037"
                          />
                          <ellipse
                            cx="22.678"
                            cy="3.479"
                            rx="22.678"
                            ry="3.479"
                            transform="translate(34.76 266.386)"
                            fill="#11a89d"
                            opacity=".1"
                          />
                          <path
                            d="M69.107 247.825l-.109.886-.15 1.251-.066.521-.15 1.251-.069.521-.15 1.251-1.731 14.222c-.157 1.269-2.232 2.261-4.74 2.261h-9.011c-2.505 0-4.576-.992-4.74-2.261l-1.736-14.221-.153-1.251-.062-.521-.157-1.251-.062-.521-.153-1.251-.109-.886c-.084-.729 1.036-1.327 2.454-1.327h18.448c1.421-.001 2.537.608 2.446 1.326z"
                            fill="#65617d"
                          />
                          <path
                            d="M69.001 248.712l-.153 1.251H46.025l-.15-1.251zM68.79 250.484l-.153 1.251h-22.39l-.153-1.251zM68.567 252.256l-.153 1.251H46.458l-.153-1.251z"
                            fill="#9d9cb5"
                          />
                        </g>
                      </svg>
                    </figure>
                    <p>
                      Hi there, this section is still unavailable. Would it be
                      okay if you could come back soon?
                    </p>
                  </div>
                  <!-- <div v-if="currentTab === '3'">
                    <h3>Travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique inventore laboriosam reiciendis repellat reprehenderit unde quidem sequi. Non maiores voluptates eveniet ex consequatur libero sapiente ab molestiae a quisquam?</p>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/12"></div>
          </div>

          <CustomFooter></CustomFooter>
        </div>
        <modal
          :name="`repo-modal`"
          :adaptive="true"
          :width="'500px'"
          :reset="true"
          :classes="'github-repo-commits__list w-11/12 md:w-9/12'"
          @before-close="beforeClose"
        >
          <div v-if="activeRepo && activeRepo.node">
            <div class="repo-meta mb-2">
              <p class="font-bold">
                <a
                  :href="activeRepo.node.url"
                  target="_blank"
                  rel="noopener noreferer"
                  >{{ activeRepo.node.name }}</a
                >
              </p>
              <p>{{ activeRepo.node.description }}</p>
              <div class="text-xxs text-layout-b2 mt-2">
                <p>
                  Created:
                  {{
                    new Date(activeRepo.node.createdAt) | dateFormat('MMM YYYY')
                  }}
                </p>
                <p>
                  Last Commit:
                  {{
                    new Date(activeRepo.node.pushedAt) | dateFormat('MMM YYYY')
                  }}
                </p>
                <p>Forked: {{ activeRepo.node.isFork }}</p>
              </div>
            </div>
            <label
              for="repo-branch"
              class="font-avenir-medium py-2 text-xxs font-semibold"
              >See latest 25 commits on:</label
            >
            &nbsp;
            <select
              class="px-2 py-1 border rounded focus:outline-none focus:border-brand text-xxs"
              name="repo-branch"
              v-model="refBranch"
            >
              <option value="0" selected disabled>Select branch</option>
              <option
                v-for="ref in activeRepo.node.refs.edges"
                :value="ref.node.id"
                :key="ref.node.id"
                >{{ ref.node.name }}</option
              >
            </select>
            <section class="text-xxs">
              <ul
                class="px-1"
                v-if="
                  activeBranch &&
                    activeBranch.length &&
                    activeBranch[0].node.target.history.edges.length
                "
              >
                <li
                  class="border-b last:border-b-0 flex py-2 leading-snug text-xxs"
                  v-for="commit in activeBranch[0].node.target.history.edges"
                  :key="commit.id"
                >
                  <p class="flex-grow">
                    <span class="text-xxs text-gray-500">
                      {{
                        new Date(commit.node.committedDate)
                          | dateFormat('MMM DD, YYYY')
                      }}
                    </span>
                    <br />
                    <strong class="text-brand text-xxs font-light">{{
                      commit.node.message
                    }}</strong>
                  </p>
                </li>
              </ul>
              <p
                v-else-if="
                  activeBranch &&
                    activeBranch.length &&
                    activeBranch[0].node.target.history.edges.length == 0
                "
              >
                No fetched ref history...
              </p>
              <p v-else>Select to see commit history...</p>
            </section>
          </div>
        </modal>
      </main>
    </NavLayout>
  </SideNavLayout>
</template>

<static-query>
query {
  metadata {
    brandColors {
      brand,
      layoutW1,
      layoutW2,
      layoutB2
    }
  }
}
</static-query>

<script>
import NavLayout from '~/layouts/NavLayout.vue'
import SideNavLayout from '~/layouts/SideNavLayout.vue'

import CustomFooter from '~/components/CustomFooter.vue'
import RepoCard from '~/components/RepoCard.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import Tabs from 'vue-tabs-with-active-line'

import axios from 'axios'

const repoQuery = {
  query: `query { 
    viewer {
      name
      repositories(first: 12, orderBy: {direction:DESC, field: UPDATED_AT}, privacy: PUBLIC) {
        edges {
          node {
            id
            name
            url
            description
            updatedAt
            createdAt
            pushedAt
            stargazerCount
            isFork
            primaryLanguage {
              id
              color
              name
            }
            refs(refPrefix: "refs/heads/", first: 100) {
              edges {
                node {
                  ... on Ref {
                    id
                    name
                    target {
                      ... on Commit {
                        history(first: 25, author:{emails: ["rhanmiano29@gmail.com"]}) {
                          edges {
                            node {
                              id
                              committedDate
                              message
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
}

export default {
  name: 'Feed',
  components: {
    NavLayout,
    SideNavLayout,
    CustomFooter,
    RepoCard,
    ClipLoader,
    Tabs,
  },
  data() {
    return {
      repos: [],
      navInfo: {
        prev: {
          hasPrev: true,
          linksTo: '/portfolio/',
          linkText: 'portfolio',
        },
        next: {
          hasNext: true,
          linksTo: '/contact/',
          linkText: 'contact',
        },
        linkColor: 'text-brand',
        iconColor: '#11A89D',
      },
      tabs: [
        { title: 'Github', value: '1' },
        { title: 'UI', value: '2' },
        { title: 'Travel', value: '3' },
      ],
      currentTab: '1',
      activeRepo: {},
      refBranch: '0',
    }
  },
  computed: {
    activeBranch() {
      const branch =
        this.activeRepo && this.activeRepo.node
          ? this.activeRepo.node.refs.edges.filter((edge) => {
              return edge.node.id === this.refBranch
            })
          : {}
      return branch
    },
  },
  methods: {
    selectRepo(repo) {
      console.log('asdfasdf', repo)
      this.activeRepo = repo
      this.$modal.show(`repo-modal`)
    },
    handleClick(newTab) {
      this.currentTab = newTab
    },
    async getRepos() {
      const { data } = await axios.post(
        `${process.env.GRIDSOME_GH_API_URL}`,
        repoQuery,
        {
          responseType: 'json',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${process.env.GRIDSOME_GH_TOKEN}`,
          },
        }
      )

      sessionStorage.setItem(
        'lsRepos',
        JSON.stringify(data.data.viewer.repositories.edges)
      )
    },
    beforeClose(event) {
      this.refBranch = '0'
    },
  },
  mounted() {
    if (!sessionStorage.getItem('lsRepos')) {
      this.getRepos().then(() => {
        this.repos = JSON.parse(sessionStorage.getItem('lsRepos'))
      })
    } else {
      this.repos = JSON.parse(sessionStorage.getItem('lsRepos'))
    }
  },
  metaInfo: {
    title: 'Feed',
  },
}
</script>

<style lang="scss">
.github-repo {
  &-card {
    @apply text-xs px-4 py-4 bg-white leading-none rounded transition duration-300  shadow-xs cursor-pointer;
    transition: all 300ms ease-out;
  }

  @screen lg {
    // @apply w-3/4;
  }

  &-commits {
    position: relative;
    display: none;
    opacity: 0;
    width: 100%;
    transition: opacity 800ms ease-out;

    &__list {
      background-color: #fff;
      @apply px-2 leading-snug text-xs p-4 rounded;
      overflow-y: scroll !important;
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      /* position: absolute;
      top: 12px;
      right: 0; */
    }
  }
  &-card:hover {
    @apply shadow-md;
  }

  &-card:hover ~ section {
    display: block;
    opacity: 1;
  }
}

.v--modal-overlay {
  // position: absolute !important;
  @media screen and (min-width: 768px) {
    @apply h-screen w-9/12;
    margin-left: 25%;
  }
}
</style>
