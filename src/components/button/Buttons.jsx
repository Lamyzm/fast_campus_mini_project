"use client";
import { Button } from "@/components/button/Button";
import { ButtonVariants } from "./button";

export default function Buttons() {
  return (
    <>
      {/* padding은 addtionalClass에 padding값을줘서 조정 */}
      <div>버튼</div>
      rounded full, width-full
      <div>
        <Button size="lg" type="rounded" color="black" additionalClass="w-full">
          로그인
        </Button>
        <Button
          size="lg"
          type="rounded"
          color="white"
          outline="outlineBold"
          additionalClass="w-full">
          로그인
        </Button>
        <Button
          size="lg"
          type="rounded"
          color="white"
          outline="outlineSemi"
          additionalClass="w-full">
          로그인
        </Button>
        <Button
          size="lg"
          type="rounded"
          color="black"
          additionalClass="w-full"
          disabled>
          로그인
        </Button>
        <Button
          size="lg"
          type="rounded"
          color="white"
          outline="outlineBold"
          additionalClass="w-full"
          disabled>
          로그인
        </Button>
        <Button
          size="lg"
          type="rounded"
          color="white"
          outline="outlineSemi"
          additionalClass="w-full"
          disabled>
          로그인
        </Button>
      </div>
      <br />
      <div>
        rounded-md, width-full
        <Button size="lg" color="black" additionalClass="w-full">
          로그인
        </Button>
        <Button
          size="lg"
          color="white"
          outline="outlineBold"
          additionalClass="w-full">
          로그인
        </Button>
        <Button
          size="lg"
          color="white"
          outline="outlineSemi"
          additionalClass="w-full">
          로그인
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" type="rounded" color="black">
          로그인
        </Button>
        <Button size="lg" type="rounded" color="black">
          로그인
        </Button>
        <Button size="xl" type="rounded" color="black">
          로그인
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" type="default" color="black">
          로그인
        </Button>
        <Button size="lg" type="default" color="black">
          로그인
        </Button>
        <Button size="xl" type="default" color="black">
          로그인
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" type="rounded" color="black" disabled>
          로그인
        </Button>
        <Button size="lg" type="rounded" color="black" disabled>
          로그인
        </Button>
        <Button size="xl" type="rounded" color="black" disabled>
          로그인
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" type="default" color="black" disabled>
          로그인
        </Button>
        <Button size="lg" type="default" color="black" disabled>
          로그인
        </Button>
        <Button size="xl" type="default" color="black" disabled>
          로그인
        </Button>
      </div>
    </>
  );
}
