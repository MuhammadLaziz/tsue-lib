<template>
  <div>
    <Teleport to="body">
      <transition name="modal" mode="out-in">
        <div
            v-if="openModal"
            class="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 delay-700 z-50 px-4 flex items-center justify-center"
            @click="hideModal"
            id="bg"
        />
      </transition>
      <transition name="bounceIn" mode="out-in">
        <div
            v-if="openModal"
            class="fixed z-50 w-full h-screen inset-0 flex-center px-4"
            :class="responsive ? '!p-0 md:px-4' : ''"
        >
          <div
              class="bg-white max-w-[580px] w-full rounded-2xl modal__shadow relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-x-hidden scrollbar-hidden"
              :class="[
              bodyClass,
              {
                'rounded-[0px] sm:rounded-2xl': responsive,
              },
              {
                'responsive-height relative': responsive,
              },
            ]"
          >
            <div
                :id="`modal-header-${randomNumber}`"
                class="md:py-[22px] flex items-center justify-between p-4 md:px-7 flex-center-between border-b border-solid border-divider"
            >
              <h2
                  class="md:text-xl sm:text-lg text-base lg:text-2xl font-bold leading-5 md:leading-8 text-dark"
              >
                {{ $t(title) }}
              </h2>
              <button
                  @click="$emit('closeModal')"
                  class="group ml-2 flex-center"
              >
                <span
                    class="md:group-hover:text-red icon-x text-[28px] text-dark-secondary transition duration-300"
                >x</span>
              </button>
            </div>
            <div class="py-7 p-6 md:px-6 px-3" :class="[contentClass]">
              <slot />
            </div>
            <div
                v-if="isSuccess"
                class="bg-white w-full h-full flex-center absolute inset-0 z-10 rounded-2xl"
            >
              <button
                  class="group absolute top-6 right-6"
                  @click="$emit('closeModal')"
              >
                <span
                    class="icon-x md:group-hover:text-red text-[28px] text-dark-secondary transition"
                />
              </button>
            </div>
            <div
                v-if="isError"
                class="bg-white w-full h-full flex-center absolute inset-0 z-10 rounded-2xl"
            >
              <button
                  class="group absolute top-6 right-6"
                  @click="$emit('closeModal')"
              >
                <span
                    class="icon-x md:group-hover:text-red text-[28px] text-dark-secondary transition"
                />
              </button>

            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();

interface Props {
  openModal: boolean;
  title: string;
  contentClass?: string;
  bodyClass?: string;
  isSuccess?: boolean;
  successTitle?: string;
  successText?: string;
  isError?: boolean;
  errorTitle?: string;
  errorText?: string;
  responsive?: boolean;
  noScroll?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  successText: "successful_bought_text",
  successTitle: "successful_bought",
  errorTitle: "error",
  errorText: "error_text",
});
const emit = defineEmits(["closeModal"]);

const hideModal = (e?: any) => {
  if (e.target.id === "bg" || e.target.id === "close") {
    emit("closeModal");
  }
};

function keyUp(event: any) {
  if (event.keyCode === 27) {
    emit("closeModal");
  }
}

watch(
    () => props.openModal,
    (newValue) => {
      if (newValue) {
        document.addEventListener("keydown", keyUp);
        if (!props.noScroll) document.body.style.overflowY = "hidden";
        document.body.classList.add("sm:pr-2");
      } else {
        document.removeEventListener("keydown", keyUp);
        if (!props.noScroll) document.body.style.overflowY = "scroll";
        document.body.classList.remove("sm:pr-2");
      }
    }
);
const randomNumber = Math.floor(Math.random() * 101);
</script>

<style scoped>
.modal__shadow {
  box-shadow: 0 8px 24px rgba(24, 25, 25, 0.08);
}

.bounceIn-enter-to,
.bounceIn-enter-active {
  animation: 0.3s fromTop ease-out;
}

.bounceIn-leave-to,
.bounceIn-leave-active {
  animation: 0.3s fromTop ease-in reverse;
}

@keyframes fromTop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  70% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounceInLeave {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.responsive-height {
  height: auto;
}

@media screen and (max-height: 950px) {
  .responsive-height {
    height: 90vh;
    overflow: auto;
  }
}
</style>
