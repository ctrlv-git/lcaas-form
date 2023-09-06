import type { App } from 'vue';

import { themeOverrides } from '@/theme/theme-overrides';
import {
  NAlert,
  NAvatar,
  NBackTop,
  NBadge,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NCard,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NCol,
  NColorPicker,
  NConfigProvider,
  NDataTable,
  NDatePicker,
  NDescriptions,
  NDescriptionsItem,
  NDialogProvider,
  NDivider,
  NDrawer,
  NDrawerContent,
  NDropdown,
  NElement,
  NForm,
  NFormItem,
  NFormItemGi,
  NGrid,
  NGridItem,
  NIcon,
  NInput,
  NInputGroup,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NList,
  NListItem,
  NLoadingBarProvider,
  NMenu,
  NMessageProvider,
  NModal,
  NNotificationProvider,
  NPagination,
  NPopover,
  NProgress,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NRate,
  NResult,
  NRow,
  NSelect,
  NSkeleton,
  NSlider,
  NSpace,
  NSpin,
  NStep,
  NSteps,
  NSwitch,
  NTabPane,
  NTable,
  NTabs,
  NTag,
  NThing,
  NTimePicker,
  NTooltip,
  NTree,
  NUpload,
  //
  create,
  createDiscreteApi,
} from 'naive-ui';

const naive = create({
  components: [
    NAlert,
    NAvatar,
    NBackTop,
    NBadge,
    NBreadcrumb,
    NBreadcrumbItem,
    NButton,
    NCard,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NCol,
    NColorPicker,
    NConfigProvider,
    NDataTable,
    NDatePicker,
    NDescriptions,
    NDescriptionsItem,
    NDialogProvider,
    NDivider,
    NDrawer,
    NDrawerContent,
    NDropdown,
    NElement,
    NForm,
    NFormItem,
    NFormItemGi,
    NGrid,
    NGridItem,
    NIcon,
    NInput,
    NInputGroup,
    NInputNumber,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NList,
    NListItem,
    NLoadingBarProvider,
    NMenu,
    NMessageProvider,
    NModal,
    NNotificationProvider,
    NPagination,
    NPopover,
    NProgress,
    NRadio,
    NRadioButton,
    NRadioGroup,
    NRate,
    NResult,
    NRow,
    NSelect,
    NSkeleton,
    NSlider,
    NSpace,
    NSpin,
    NStep,
    NSteps,
    NSwitch,
    NTabPane,
    NTable,
    NTabs,
    NTag,
    NThing,
    NTimePicker,
    NTooltip,
    NTree,
    NUpload,
  ],
});

export function setupNaiveUi(app: App) {
  const {
    message,
    loadingBar,
    app: asideApp,
  } = createDiscreteApi(['message', 'loadingBar'], {
    configProviderProps: { tag: 'aside', themeOverrides },
  });
  window['$loadingBar'] = loadingBar;
  window['$message'] = message;
  window['$asideApp'] = asideApp;
  app.use(naive);
}
