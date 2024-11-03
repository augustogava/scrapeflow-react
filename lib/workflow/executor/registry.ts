import { AddPropertyToJsonExecutor } from "@/lib/workflow/executor/AddPropertyToJsonExecutor";
import { ClickElementExecutor } from "@/lib/workflow/executor/ClickElementExecutor";
import { DeliverViaWebhookExecutor } from "@/lib/workflow/executor/DeliverViaWebhookExecutor";
import { ExtractDataWithAiExecutor } from "@/lib/workflow/executor/ExtractDataWithAiExecutor";
import { ExtractTextFromElementExecutor } from "@/lib/workflow/executor/ExtractTextFromElementExecutor";
import { FillInputExecutor } from "@/lib/workflow/executor/FillInputExecutor";
import { LaunchBrowserExecutor } from "@/lib/workflow/executor/LaunchBrowserExecutor";
import { NavigateUrlExecutor } from "@/lib/workflow/executor/NavigateUrlExecutor";
import { PageToHtmlExecutor } from "@/lib/workflow/executor/PageToHtmlExecutor";
import { ReadPropertyFromJsonExecutor } from "@/lib/workflow/executor/ReadPropertyFromJsonExecutor";
import { ScrollToElementExecutor } from "@/lib/workflow/executor/ScrollToElementExecutor";
import { WaitForElementExecutor } from "@/lib/workflow/executor/WaitForElementExecutor";
import { ExecutionEnvironment } from "@/types/executor";
import { TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";

type ExecutorFn<T extends WorkflowTask> = (
  environment: ExecutionEnvironment<T>
) => Promise<boolean>;

type RegistryType = {
  [K in TaskType]: ExecutorFn<WorkflowTask & { type: K }>;
};

export const ExecutorRegistry: RegistryType = {
  LAUNCH_BROWSER: LaunchBrowserExecutor,
  PAGE_TO_HTML: PageToHtmlExecutor,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
  FILL_INPUT: FillInputExecutor,
  CLICK_ELEMENT: ClickElementExecutor,
  WAIT_FOR_EMELEMENT: WaitForElementExecutor,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookExecutor,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAiExecutor,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonExecutor,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonExecutor,
  NAVIGATE_URL: NavigateUrlExecutor,
  SCROLL_TO_ELEMENT: ScrollToElementExecutor,
};
