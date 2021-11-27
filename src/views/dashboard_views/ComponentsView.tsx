import { Button } from "../../components/buttons";
import { HomeIcon } from "@heroicons/react/outline";
import IconButton from "../../components/buttons/IconButton";

const ComponentsView = () => {
  return (
    <div className="flex flex-col gap-16 px-4 max-w-screen-2xl mx-auto w-full py-16">
      {/* Button Section */}
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Buttons</h1>

        {/* Button Sizes */}
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl">Sizes</h1>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button name="Button Large" type="primary" size="lg" />
            <Button name="Button Medium" type="primary" size="md" />
            <Button name="Button Small" type="primary" size="sm" />
          </div>
        </div>

        {/* Normal Buttons */}
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl">Normal Buttons</h1>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button name="Primary" type="primary" />
            <Button name="Success" type="success" />
            <Button name="Warning" type="warning" />
            <Button name="Danger" type="danger" />
            <Button name="Secondary" type="secondary" />
          </div>
        </div>

        {/* Ghost Buttons */}
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl">Ghost Buttons</h1>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button name="Primary" isGhost type="primary" />
            <Button name="Success" isGhost type="success" />
            <Button name="Warning" isGhost type="warning" />
            <Button name="Danger" isGhost type="danger" />
            <Button name="Secondary" isGhost type="secondary" />
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl">Icon Buttons</h1>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button
              name="Button"
              size="sm"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
            />
            <Button
              name="Button"
              size="sm"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
            />
            <Button
              name="Button"
              size="sm"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
              isGhost
            />
            <Button
              name="Button"
              size="sm"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
              isGhost
            />
          </div>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button
              name="Button"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
            />
            <Button
              name="Button"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
            />
            <Button
              name="Button"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
              isGhost
            />
            <Button
              name="Button"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
              isGhost
            />
          </div>
          <div className="flex flex-row gap-4 flex-wrap items-center">
            <Button
              name="Button"
              size="lg"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
            />
            <Button
              name="Button"
              size="lg"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
            />
            <Button
              name="Button"
              size="lg"
              Icon={HomeIcon}
              iconPos="left"
              type="primary"
              isGhost
            />
            <Button
              name="Button"
              size="lg"
              Icon={HomeIcon}
              iconPos="right"
              type="primary"
              isGhost
            />
          </div>

          {/* Icon Only Buttons */}
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-xl">Icon Only Buttons</h1>
            <div className="flex flex-row gap-4 flex-wrap items-center">
              <IconButton
                title="Icon Button"
                type="primary"
                Icon={HomeIcon}
                size="lg"
              />

              <IconButton
                title="Icon Button"
                type="primary"
                Icon={HomeIcon}
                size="md"
              />
              <IconButton
                title="Icon Button"
                type="primary"
                Icon={HomeIcon}
                size="sm"
              />
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center">
              <IconButton title="Icon Button" type="primary" Icon={HomeIcon} />
              <IconButton title="Icon Button" type="success" Icon={HomeIcon} />
              <IconButton title="Icon Button" type="warning" Icon={HomeIcon} />
              <IconButton title="Icon Button" type="danger" Icon={HomeIcon} />
              <IconButton
                title="Icon Button"
                type="secondary"
                Icon={HomeIcon}
              />
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center">
              <IconButton
                title="Icon Button"
                type="primary"
                Icon={HomeIcon}
                isGhost
              />
              <IconButton
                title="Icon Button"
                type="success"
                Icon={HomeIcon}
                isGhost
              />
              <IconButton
                title="Icon Button"
                type="warning"
                Icon={HomeIcon}
                isGhost
              />
              <IconButton
                title="Icon Button"
                type="danger"
                Icon={HomeIcon}
                isGhost
              />
              <IconButton
                title="Icon Button"
                type="secondary"
                Icon={HomeIcon}
                isGhost
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsView;
