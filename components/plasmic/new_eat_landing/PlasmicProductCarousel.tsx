// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jyncrcExmd4vsfVgQ1hNS1
// Component: k8FvLYW1Nwx8

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import LinkButton from "../../LinkButton"; // plasmic-import: ykQgKfXsK1jI/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jyncrcExmd4vsfVgQ1hNS1/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: k8FvLYW1Nwx8/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: YZqY6_2geyr2/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: MjmKHrwgZZET/icon

createPlasmicElementProxy;

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third";
};
export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
};
type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs;
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
);

export type PlasmicProductCarousel__ArgsType = {};
type ArgPropType = keyof PlasmicProductCarousel__ArgsType;
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCarousel__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs;
  args: PlasmicProductCarousel__ArgsType;
  overrides: PlasmicProductCarousel__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "slider",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.slider
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__pdIx3)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tGbCw, {
            [sty.freeBoxslider_second__tGbCwDolwC]: hasVariant(
              $state,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5YgA
            )}
          >
            {"Great Design Collection"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__q5Uwa,
              {
                [sty.textslider_first__q5Uwaahz06]: hasVariant(
                  $state,
                  "slider",
                  "first"
                ),
                [sty.textslider_second__q5UwaDolwC]: hasVariant(
                  $state,
                  "slider",
                  "second"
                ),
                [sty.textslider_third__q5UwatOPiN]: hasVariant(
                  $state,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant($state, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant($state, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jlDGn
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__rKD7)}>
            <div className={classNames(projectcss.all, sty.freeBox___6Dsyu)} />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zUz1F,
                {
                  [sty.textslider_second__zUz1FDolwC]: hasVariant(
                    $state,
                    "slider",
                    "second"
                  ),
                  [sty.textslider_third__zUz1FtOPiN]: hasVariant(
                    $state,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant($state, "slider", "third")
                ? " $299.00"
                : hasVariant($state, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2Ar5U,
                {
                  [sty.textslider_first___2Ar5Uahz06]: hasVariant(
                    $state,
                    "slider",
                    "first"
                  ),
                  [sty.textslider_second___2Ar5UDolwC]: hasVariant(
                    $state,
                    "slider",
                    "second"
                  ),
                  [sty.textslider_third___2Ar5UtOPiN]: hasVariant(
                    $state,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant($state, "slider", "third")
                ? " $399.00"
                : hasVariant($state, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jqjBz)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__xvmbm)}
              text={"\u2295 Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__pJ7Eb)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </Stack__>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__kfOmF)}>
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.imgslider_first]: hasVariant($state, "slider", "first"),
              [sty.imgslider_second]: hasVariant($state, "slider", "second"),
              [sty.imgslider_third]: hasVariant($state, "slider", "third")
            })}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={
              hasVariant($state, "slider", "third")
                ? {
                    src: "/plasmic/new_eat_landing/images/slider3.png",
                    fullWidth: 553,
                    fullHeight: 475,
                    aspectRatio: undefined
                  }
                : hasVariant($state, "slider", "second")
                ? {
                    src: "/plasmic/new_eat_landing/images/slider2.png",
                    fullWidth: 528,
                    fullHeight: 559,
                    aspectRatio: undefined
                  }
                : {
                    src: "/plasmic/new_eat_landing/images/slider1.png",
                    fullWidth: 507,
                    fullHeight: 549,
                    aspectRatio: undefined
                  }
            }
          />
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qaaYl)}
      >
        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "third")
              ? CircleOIcon
              : hasVariant($state, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__cyGv, {
            [sty.svgslider_second__cyGvDolwC]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__cyGvtOPiN]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__p41Xn, {
            [sty.svgslider_first__p41Xnahz06]: hasVariant(
              $state,
              "slider",
              "first"
            ),
            [sty.svgslider_second__p41XnDolwC]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__p41XntOPiN]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "third") ? DotCircleOIcon : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__asFju, {
            [sty.svgslider_third__asFjUtOPiN]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCarousel__VariantsArgs;
    args?: PlasmicProductCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductCarousel__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductCarousel__ArgProps,
          internalVariantPropNames: PlasmicProductCarousel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
